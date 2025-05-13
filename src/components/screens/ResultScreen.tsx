import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";
import { SkillLevel } from "../../types/quiz";
import { questions } from "../../data/questions";
import { Helmet } from "react-helmet";
import "./ResultScreen.css";

const ResultScreen: React.FC = () => {
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();
  const { score } = useParams(); // ⬅️ Prendi lo score dalla URL

  const totalQuestions = questions.length;
  const numericScore = Math.min(parseInt(score || "0", 10), totalQuestions); // ⬅️ fallback e limite

  const getSkillLevel = (): SkillLevel => {
    if (numericScore === totalQuestions) return SkillLevel.MASTER;
    if (numericScore >= 8) return SkillLevel.EXPERT;
    if (numericScore >= 4) return SkillLevel.INTERMEDIATE;
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
    const resultText = `Ho realizzato ${numericScore}/${totalQuestions} punti al Food Education Quiz! Il mio livello è: ${skillLevel}.`;
    const resultUrl = `https://jpier34.github.io/food-education-quiz/result/score/${numericScore}`;

    if (navigator.share) {
      navigator.share({
        title: "Sfida al Food Education Quiz 🌱",
        text: resultText,
        url: resultUrl,
      });
    } else {
      const fallbackMessage = `${resultText}\nFai anche tu il quiz: ${resultUrl}`;
      alert(fallbackMessage);
    }
  };

  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content={`Risultati del Quiz - Livello: ${skillLevel}`}
        />
        <meta
          property="og:description"
          content={`Ho ottenuto ${numericScore}/${totalQuestions} punti al quiz!`}
        />
        <meta
          property="og:image"
          content="https://jpier34.github.io/food-education-quiz/src/assets/result-banner.png"
        />
        <meta
          property="og:url"
          content={`https://jpier34.github.io/food-education-quiz/result/score/${numericScore}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Risultati del Quiz - Livello: ${skillLevel}`}
        />
        <meta
          name="twitter:description"
          content={`Ho ottenuto ${numericScore}/${totalQuestions} punti al quiz!`}
        />
        <meta
          name="twitter:image"
          content="https://jpier34.github.io/food-education-quiz/src/assets/result-banner.png"
        />
      </Helmet>

      <div className="result-container">
        <h1>
          <u>Risultati del Quiz!</u>
        </h1>

        <div className="score-container">
          <div className="score-circle">
            <span className="score-number">{numericScore}</span>
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
    </>
  );
};

export default ResultScreen;
