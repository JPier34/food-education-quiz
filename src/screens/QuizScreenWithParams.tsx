import React, { useEffect, useContext } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import QuizScreen from "./QuizScreen";
import { questions } from "../data/questions";

const QuizScreenWithParams: React.FC = () => {
  const { questionId } = useParams();
  const location = useLocation();
  const { state, dispatch } = useContext(QuizContext);

  const questionIndex = questionId ? parseInt(questionId, 10) - 1 : 0;

  useEffect(() => {
    if (
      questionIndex >= 0 &&
      questionIndex < questions.length &&
      questionIndex !== state.currentQuestionIndex
    ) {
      dispatch({ type: "SET_QUESTION_INDEX", payload: questionIndex });
    }
  }, [location.pathname]);

  if (state.quizCompleted) return <Navigate to="/results" />;
  if (questionIndex < 0 || questionIndex >= questions.length) {
    return <Navigate to="/quiz/1" />;
  }

  return <QuizScreen />;
};

export default QuizScreenWithParams;
