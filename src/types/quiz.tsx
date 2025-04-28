export interface Question {
  id: number;
  text: string;
  options: Option[];
  explanation: string;
}

export interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface UserAnswer {
  questionId: number;
  selectedOptionId: number;
  isCorrect: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: UserAnswer[];
  score: number;
  quizCompleted: boolean;
}

export type QuizAction =
  | { type: "START_QUIZ" }
  | { type: "ANSWER_QUESTION"; payload: UserAnswer }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" };

export enum SkillLevel {
  BEGINNER = "Principiante",
  INTERMEDIATE = "Intermedio",
  EXPERT = "Esperto/a!",
  MASTER = "Maestro/a!",
}
