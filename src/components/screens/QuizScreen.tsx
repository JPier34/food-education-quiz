import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { QuizContext } from "../../context/QuizContext";
import { Question } from "../../types/quiz";
import { questions } from "../../data/questions";
import ProgressBar from "../ui/ProgressBar";

interface FormData {
  answer: string;
}

const QuizScreen: React.FC = () => {
  const { state, dispatch } = useContext(QuizContext);
  const {
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setValue,
    watch,
  } = useForm<FormData>();

  // Stato per gestire l'errore di selezione
  const [showError, setShowError] = useState(false);

  const currentQuestion: Question = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;

  const onSubmit = (data: FormData) => {
    if (!data.answer) {
      setShowError(true); // Mostra errore se non è stata selezionata nessuna risposta
      return;
    }

    setShowError(false); // Nascondi errore se la risposta è stata selezionata

    const selectedOptionId = parseInt(data.answer);
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === selectedOptionId
    );

    if (!selectedOption) return;

    // Registra la risposta
    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        questionId: currentQuestion.id,
        selectedOptionId,
        isCorrect: selectedOption.isCorrect,
      },
    });

    // Verifica se è l'ultima domanda
    if (isLastQuestion) {
      dispatch({ type: "COMPLETE_QUIZ" });
      // Redirect gestito tramite React Router in App.tsx
    } else {
      // Passa alla prossima domanda
      dispatch({ type: "NEXT_QUESTION" });
      // Reset il form per la nuova domanda
      reset();
    }
  };

  return (
    <div className="quiz-screen">
      {/* Verifica che progress sia un numero valido prima di renderizzare la barra */}
      {!isNaN(progress) && <ProgressBar progress={progress} />}

      <div className="question-counter">
        Domanda {state.currentQuestionIndex + 1} di {questions.length}
      </div>

      <div className="question-container">
        <h2 className="question-text">{currentQuestion.text}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="options-form">
          {currentQuestion.options.map((option) => (
            <div key={option.id} className="option-item">
              <button
                type="button"
                className={`option-button ${watch("answer") === String(option.id) ? "selected" : ""}`}
                onClick={() => setValue("answer", String(option.id))}
              >
                {option.text}
              </button>
            </div>
          ))}

          {showError && (
            <p className="error-message">Seleziona una risposta!</p>
          )}

          <button type="submit" className="next-button">
            {isLastQuestion ? "Completa Quiz" : "Conferma Risposta"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizScreen;
