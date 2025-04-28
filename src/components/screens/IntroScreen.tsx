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
          <span>👇 Come funziona:</span>
          <ul>
            <li className="question">
              Il quiz consiste in <strong>10 domande</strong> a scelta multipla
            </li>
            <li className="option">
              Per ogni domanda, seleziona una delle{" "}
              <strong>quattro opzioni</strong> disponibili
            </li>
            <li className="score">
              Alla fine riceverai un <strong>punteggio</strong> e un livello di
              competenza
            </li>
            <li className="share">
              Potrai <strong>condividere</strong> i tuoi risultati sui social
              media
            </li>
          </ul>
          <p>
            <strong className="intro-emphasis">...Cominciamo? </strong>
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
