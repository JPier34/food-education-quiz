import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";
import { SkillLevel } from "../../types/quiz";
import { questions } from "../../data/questions";
import "./ResultScreen.css";

const ResultScreen: React.FC = () => {
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const totalQuestions = questions.length;

  const getSkillLevel = (): SkillLevel => {
    if (state.score === totalQuestions) return SkillLevel.MASTER;
    if (state.score >= 8) return SkillLevel.EXPERT;
    if (state.score >= 4) return SkillLevel.INTERMEDIATE;
    return SkillLevel.BEGINNER;
  };

  const skillLevel = getSkillLevel();

  const getMessage = (): string => {
    switch (skillLevel) {
      case SkillLevel.MASTER:
        return "🎉 Complimenti! Per te la sostenibilità alimentare non ha segreti! 🌱👑";
      case SkillLevel.EXPERT:
        return "🚀 Ottimo! Hai un'ottima conoscenza dell'impatto ambientale del cibo! 🌍✨";
      case SkillLevel.INTERMEDIATE:
        return "👍 Buon lavoro, ma puoi ancora migliorare! 🍽️📚";
      case SkillLevel.BEGINNER:
        return "🌱 C'è ancora da imparare, ma sei sulla strada giusta! 💪😊";
    }
  };

  const restartQuiz = () => {
    dispatch({ type: "START_QUIZ" });
    navigate("/");
  };

  const shareResults = () => {
    const shareText = `Ho ottenuto ${state.score}/${totalQuestions} nel quiz sulla sostenibilità alimentare! Il mio livello è: ${skillLevel}. Prova anche tu!`;

    const resultUrl = `https://jpier34.github.io/food-education-quiz/results.html?score=${state.score}&level=${skillLevel}`;

    if (navigator.share) {
      navigator.share({
        title: "Il mio risultato nel Quiz sulla Sostenibilità Alimentare",
        text: shareText,
        url: resultUrl,
      });
    } else {
      // Fallback se Web Share API non è supportata
      alert(`Condividi questo risultato:\n${shareText}\n${resultUrl}`);
    }
  };

  return (
    <div className="result-container">
      <h1>
        <u>Risultati del Quiz!</u>
      </h1>

      <div className="score-container">
        <div className="score-circle">
          <span className="score-number">{state.score}</span>
          <span className="score-total">/{totalQuestions}</span>
        </div>
      </div>

      <div className="skill-level">
        Il tuo livello:{" "}
        <span className="skill-value">
          <b>{skillLevel}</b>
        </span>
      </div>

      <p className="result-message">{getMessage()}</p>

      <div className="action-buttons">
        <button className="restart-button" onClick={restartQuiz}>
          Riprova il Quiz
        </button>

        <button className="share-button" onClick={shareResults}>
          Condividi Risultati
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
