import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { QuizContext } from "../context/QuizContext";
import { Question } from "../types/quiz";
import { questions } from "../data/questions";
import ProgressBar from "../components/ui/ProgressBar";

interface FormData {
  answer: string;
}

const QuizScreen: React.FC = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { handleSubmit, reset, setValue, watch, getValues } =
    useForm<FormData>();

  const currentQuestion: Question = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;

  const onSubmit = () => {
    const selectedAnswer = getValues("answer");

    if (!selectedAnswer) return;

    const selectedOptionId = parseInt(selectedAnswer);
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === selectedOptionId
    );

    if (!selectedOption) return;

    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        questionId: currentQuestion.id,
        selectedOptionId,
        isCorrect: selectedOption.isCorrect,
      },
    });

    if (isLastQuestion) {
      dispatch({ type: "COMPLETE_QUIZ" });
    } else {
      dispatch({ type: "NEXT_QUESTION" });
      reset();
    }
  };

  const selectedAnswer = watch("answer");

  return (
    <div className="quiz-screen">
      {!isNaN(progress) && <ProgressBar progress={progress} />}

      <div className="question-counter">
        Domanda {state.currentQuestionIndex + 1} di {questions.length}
      </div>

      <div className="question-container">
        <h2 className="question-text">{currentQuestion.text}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="options-form">
          <div className="options-grid">
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
          </div>

          {!selectedAnswer && (
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
