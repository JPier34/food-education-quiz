import React from "react";

// Definire l'interfaccia per lo stato
interface QuizState {
  currentQuestionIndex: number;
  answers: Answer[];
  quizCompleted: boolean;
  score: number;
}

// Definire l'interfaccia per le risposte
interface Answer {
  questionId: number;
  selectedOptionId: number;
  isCorrect: boolean;
}

// Definizione delle azioni possibili
type QuizAction =
  | { type: "START_QUIZ" }
  | { type: "NEXT_QUESTION" }
  | { type: "SET_QUESTION_INDEX"; payload: number } // Nuova azione
  | {
      type: "ANSWER_QUESTION";
      payload: {
        questionId: number;
        selectedOptionId: number;
        isCorrect: boolean;
      };
    }
  | { type: "COMPLETE_QUIZ" }
  | { type: "RESET_QUIZ" };

// Stato iniziale
export const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: [],
  quizCompleted: false,
  score: 0,
};

// Reducer per gestire le azioni
export const quizReducer = (
  state: QuizState,
  action: QuizAction
): QuizState => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...initialState,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "SET_QUESTION_INDEX":
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };
    case "ANSWER_QUESTION":
      // Aggiungi o sostituisci la risposta
      const existingAnswerIndex = state.answers.findIndex(
        (a) => a.questionId === action.payload.questionId
      );
      const newAnswers = [...state.answers];

      if (existingAnswerIndex !== -1) {
        // Sostituisci la risposta esistente
        newAnswers[existingAnswerIndex] = action.payload;
      } else {
        // Aggiungi una nuova risposta
        newAnswers.push(action.payload);
      }

      // Calcola il nuovo punteggio
      const score = newAnswers.filter((answer) => answer.isCorrect).length;

      return {
        ...state,
        answers: newAnswers,
        score,
      };
    case "COMPLETE_QUIZ":
      return {
        ...state,
        quizCompleted: true,
      };
    case "RESET_QUIZ":
      return initialState;
    default:
      return state;
  }
};

interface QuizContextType {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
}

// Creazione del contesto
export const QuizContext = React.createContext<QuizContextType>({
  state: initialState,
  dispatch: () => null,
});
