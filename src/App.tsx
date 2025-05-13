import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IntroScreen from "./components/screens/IntroScreen";
import ResultScreen from "./components/screens/ResultScreen";
import { QuizContext, quizReducer, initialState } from "./context/QuizContext";
import FoodBackground from "./components/ui/FoodBackground";
import QuizScreenWithParams from "./components/screens/QuizScreenWithParams";
import "./App.css";

// Wrapper per IntroScreen
const IntroScreenWrapper: React.FC = () => {
  const { state } = React.useContext(QuizContext);

  if (state.answers.length > 0 && !state.quizCompleted) {
    return <Navigate to={`/quiz/${state.currentQuestionIndex + 1}`} />;
  }

  return <IntroScreen />;
};

// Wrapper per QuizScreen
const App: React.FC = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      <FoodBackground />
      <div className="app-container">
        <Router>
          <Routes>
            <Route path="/" element={<IntroScreenWrapper />} />
            <Route path="/quiz" element={<Navigate to="/quiz/1" />} />
            <Route
              path="/quiz/:questionId"
              element={<QuizScreenWithParams />}
            />
            <Route path="/result/score/:score" element={<ResultScreen />} />
            <Route path="/results" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </QuizContext.Provider>
  );
};

export default App;
