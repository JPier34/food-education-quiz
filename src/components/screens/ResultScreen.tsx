import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";
import { SkillLevel } from "../../types/quiz";
import { questions } from "../../data/questions";
import "./ResultScreen.css";

const ResultScreen: React.FC = () => {
  const { state, dispatch } = useContext(QuizContext);
  const navigate = useNavigate();
  const location = useLocation();

  const totalQuestions = questions.length;

  // Lettura da URL se presenti
  const params = new URLSearchParams(location.search);
  const scoreFromUrl = params.get("score");
  const levelFromUrl = params.get("level");

  const score = scoreFromUrl ? parseInt(scoreFromUrl, 10) : state.score;

  const getSkillLevel = (scoreVal: number): SkillLevel => {
    if (scoreVal === totalQuestions) return SkillLevel.MASTER;
    if (scoreVal >= 8) return SkillLevel.EXPERT;
    if (scoreVal >= 4) return SkillLevel.INTERMEDIATE;
    return SkillLevel.BEGINNER;
  };

  const skillLevel: SkillLevel =
    (levelFromUrl as SkillLevel) || getSkillLevel(score);

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
      default:
        return "";
    }
  };

  const restartQuiz = () => {
    dispatch({ type: "START_QUIZ" });
    navigate("/");
  };

  const shareResults = () => {
    const shareURL = `${window.location.origin}/results.html?score=${score}&level=${skillLevel}`;
    const shareText = `Ho ottenuto ${score}/${totalQuestions} nel quiz sulla sostenibilità! Il mio livello è: ${skillLevel}. Prova anche tu!`;

    if (navigator.share) {
      navigator
        .share({
          title: "Il mio risultato nel Quiz sulla Sostenibilità",
          text: shareText,
          url: shareURL,
        })
        .catch((err) => console.error("Errore nella condivisione:", err));
    } else {
      navigator.clipboard.writeText(shareURL);
      alert("Link copiato negli appunti!");
    }
  };

  return (
    <div className="result-container">
      <h1>
        <u>Risultati del Quiz!</u>
      </h1>

      <div className="score-container">
        <div className="score-circle">
          <span className="score-number">{score}</span>
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
