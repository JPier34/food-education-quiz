import { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    text: "Quale delle seguenti pratiche agricole ha il minor impatto ambientale?",
    options: [
      { id: 1, text: "Agricoltura intensiva su larga scala", isCorrect: false },
      { id: 2, text: "Agricoltura biologica locale", isCorrect: true },
      { id: 3, text: "Monocoltura estensiva", isCorrect: false },
      { id: 4, text: "Allevamento industriale", isCorrect: false },
    ],
    explanation:
      "L'agricoltura biologica locale riduce l'uso di pesticidi, fertilizzanti chimici e le emissioni legate al trasporto.",
  },
  {
    id: 2,
    text: "Quale alimento ha generalmente la maggiore impronta idrica per kg prodotto?",
    options: [
      { id: 1, text: "Patate", isCorrect: false },
      { id: 2, text: "Pomodori", isCorrect: false },
      { id: 3, text: "Carne bovina", isCorrect: true },
      { id: 4, text: "Pane", isCorrect: false },
    ],
    explanation:
      "La produzione di carne bovina richiede molta acqua per l'irrigazione dei mangimi e per l'abbeveraggio degli animali.",
  },
  {
    id: 3,
    text: "Quale gas serra è maggiormente emesso dagli allevamenti di bestiame?",
    options: [
      { id: 1, text: "Anidride carbonica (CO2)", isCorrect: false },
      { id: 2, text: "Metano (CH4)", isCorrect: true },
      { id: 3, text: "Protossido di azoto (N2O)", isCorrect: false },
      { id: 4, text: "Ozono (O3)", isCorrect: false },
    ],
    explanation:
      "Gli allevamenti di bestiame emettono grandi quantità di metano, un gas serra molto potente, attraverso la digestione degli animali.",
  },
  {
    id: 4,
    text: "Quale delle seguenti scelte alimentari riduce maggiormente l'impatto ambientale?",
    options: [
      { id: 1, text: "Consumare carne ogni giorno", isCorrect: false },
      { id: 2, text: "Seguire una dieta vegetariana", isCorrect: true },
      { id: 3, text: "Mangiare solo prodotti confezionati", isCorrect: false },
      { id: 4, text: "Evitare frutta e verdura", isCorrect: false },
    ],
    explanation:
      "Una dieta vegetariana riduce significativamente le emissioni di gas serra e l'uso di risorse naturali rispetto a una dieta ricca di carne.",
  },
  {
    id: 5,
    text: "Quale delle seguenti pratiche aiuta a ridurre lo spreco alimentare?",
    options: [
      { id: 1, text: "Acquistare più cibo del necessario", isCorrect: false },
      { id: 2, text: "Conservare correttamente gli alimenti", isCorrect: true },
      { id: 3, text: "Buttare via gli avanzi", isCorrect: false },
      { id: 4, text: "Ignorare le date di scadenza", isCorrect: false },
    ],
    explanation:
      "Conservare correttamente gli alimenti aiuta a prolungarne la durata e a ridurre lo spreco alimentare.",
  },
  {
    id: 6,
    text: "Quale tipo di pesca è considerato più sostenibile?",
    options: [
      { id: 1, text: "Pesca a strascico", isCorrect: false },
      { id: 2, text: "Pesca con reti derivanti", isCorrect: false },
      { id: 3, text: "Pesca artigianale a basso impatto", isCorrect: true },
      { id: 4, text: "Pesca industriale su larga scala", isCorrect: false },
    ],
    explanation:
      "La pesca artigianale a basso impatto utilizza metodi che riducono i danni agli ecosistemi marini e limitano le catture accessorie.",
  },
  {
    id: 7,
    text: "Quale delle seguenti fonti di proteine ha il minor impatto ambientale?",
    options: [
      { id: 1, text: "Carne di manzo", isCorrect: false },
      { id: 2, text: "Carne di pollo", isCorrect: false },
      { id: 3, text: "Legumi", isCorrect: true },
      { id: 4, text: "Pesce d'allevamento", isCorrect: false },
    ],
    explanation:
      "I legumi hanno un impatto ambientale molto basso rispetto alle proteine animali, richiedendo meno risorse per la produzione.",
  },
  {
    id: 8,
    text: "Quale delle seguenti azioni contribuisce a una dieta più sostenibile?",
    options: [
      {
        id: 1,
        text: "Acquistare prodotti locali e di stagione",
        isCorrect: true,
      },
      { id: 2, text: "Consumare solo cibi importati", isCorrect: false },
      { id: 3, text: "Mangiare solo cibi processati", isCorrect: false },
      {
        id: 4,
        text: "Evitare completamente frutta e verdura",
        isCorrect: false,
      },
    ],
    explanation:
      "Acquistare prodotti locali e di stagione riduce le emissioni legate al trasporto e supporta l'agricoltura sostenibile.",
  },
  {
    id: 9,
    text: "Quale delle seguenti scelte aiuta a ridurre l'impronta di carbonio del cibo?",
    options: [
      { id: 1, text: "Mangiare meno carne rossa", isCorrect: true },
      { id: 2, text: "Consumare più cibi confezionati", isCorrect: false },
      { id: 3, text: "Evitare cibi freschi", isCorrect: false },
      { id: 4, text: "Mangiare solo cibi surgelati", isCorrect: false },
    ],
    explanation:
      "Ridurre il consumo di carne rossa è una delle azioni più efficaci per abbassare l'impronta di carbonio legata all'alimentazione.",
  },
  {
    id: 10,
    text: "Quale delle seguenti pratiche agricole contribuisce alla conservazione del suolo?",
    options: [
      { id: 1, text: "Monocoltura intensiva", isCorrect: false },
      { id: 2, text: "Rotazione delle colture", isCorrect: true },
      {
        id: 3,
        text: "Uso eccessivo di fertilizzanti chimici",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Deforestazione per nuove coltivazioni",
        isCorrect: false,
      },
    ],
    explanation:
      "La rotazione delle colture aiuta a mantenere la fertilità del suolo e a prevenire l'erosione.",
  },
];

export default questions;
