import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";
import { questions } from "../../data/questions";
import ProgressBar from "../ui/ProgressBar";
import "./QuizScreenWithParams";
import "../../App.css";

interface FormData {
  answer: string;
}

interface QuizScreenProps {
  questionIndex: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ questionIndex }) => {
  const { dispatch } = useContext(QuizContext);
  const { handleSubmit, setValue, watch, reset } = useForm<FormData>();
  const navigate = useNavigate(); // Inizializza useNavigate

  const currentQuestion = questions[questionIndex];
  const progress = ((questionIndex + 1) / questions.length) * 100;
  const isLastQuestion = questionIndex === questions.length - 1;

  const selectedAnswer = watch("answer");

  useEffect(() => {
    const errorContainer = document.querySelector(".error-container");
    if (selectedAnswer && errorContainer?.classList.contains("show-error")) {
      errorContainer.classList.remove("show-error");
    }
  }, [selectedAnswer]);

  const onSubmit = (data: FormData) => {
    if (!data.answer) {
      // Visual feedback: mostra l'errore
      const errorContainer = document.querySelector(".error-container");
      if (errorContainer) {
        errorContainer.classList.add("show-error");
      }

      // Vibrazione leggera (se supportata dal dispositivo)
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }

      return; // Blocca l'invio
    }

    const selectedOptionId = parseInt(data.answer);
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === selectedOptionId
    );

    if (!selectedOption) return;

    // Dispatch la risposta selezionata
    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        questionId: currentQuestion.id,
        selectedOptionId,
        isCorrect: selectedOption.isCorrect,
      },
    });

    // Se è l'ultima domanda, completa il quiz
    if (isLastQuestion) {
      dispatch({ type: "COMPLETE_QUIZ" });
      navigate("/results"); // Naviga alla pagina dei risultati
    } else {
      // Altrimenti vai alla domanda successiva
      dispatch({ type: "NEXT_QUESTION" });
      reset(); // Reset del form per la prossima domanda
      navigate(`/quiz/${questionIndex + 2}`); // Naviga alla prossima domanda (es. quiz/2)
    }

    // Dopo l'invio della risposta, rimuovi la classe dell'errore se presente
    const errorContainer = document.querySelector(".error-container");
    if (errorContainer) {
      errorContainer.classList.remove("show-error");
    }
  };

  return (
    <div className="quiz-screen">
      <div className="error-container">
        <p>Seleziona una risposta!</p>
      </div>
      {!isNaN(progress) && <ProgressBar progress={progress} />}

      <div className="question-counter spacing-bottom">
        Domanda {questionIndex + 1} di {questions.length}
      </div>

      <div className="question-container">
        <h2 className="question-text">{currentQuestion.text}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="options-form">
          <div className="options-grid">
            {currentQuestion.options.map((option) => (
              <div key={option.id} className="option-item">
                <button
                  type="button"
                  className={`option-button ${selectedAnswer === String(option.id) ? "selected" : ""}`}
                  onClick={() => setValue("answer", String(option.id))}
                >
                  {option.text}
                </button>
              </div>
            ))}
          </div>

          <button type="submit" className="next-button">
            {isLastQuestion ? "Completa Quiz" : "Conferma Risposta"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizScreen;
