import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";
import "./IntroScreen.css";

const IntroScreen: React.FC = () => {
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz/1");
    dispatch({ type: "RESET_QUIZ" });
  };

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <h1 className="intro-title">🤔 Quanto ne sai?</h1>

        <div className="intro-description">
          <p>
            🌿 Benvenuto al quiz sulla{" "}
            <strong> sostenibilità alimentare</strong> e l'impatto del cibo
            sull'ambiente!
          </p>
          <p>
            Questo quiz ti permetterà di testare le tue conoscenze su come le
            nostre scelte alimentari quotidiane influenzano l'ambiente e la
            società.
          </p>
          <span>Come funziona:</span>👇
          <ul>
            <li>
              Il quiz consiste in <strong>10 domande</strong> a scelta multipla
            </li>
            <li>
              Per ogni domanda, seleziona una delle quattro opzioni disponibili
            </li>
            <li>Alla fine riceverai un punteggio e un livello di competenza</li>
            <li>Potrai condividere i tuoi risultati sui social media</li>
          </ul>
          <p>
            <strong>
              Sei pronto a scoprire quanto sei informato sulle tematiche di
              sostenibilità alimentare?
            </strong>
          </p>
        </div>

        <button className="start-button" onClick={startQuiz}>
          Inizia il Quiz! ▶️
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
