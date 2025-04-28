import React from "react";
import "./FoodBackground.css"; // Importiamo il file CSS per lo sfondo

const FoodBackground: React.FC = () => {
  const pattern = ["cheese", "drink", "fruit"]; // Array con le classi alternate

  return (
    <div className="food-background-wrapper">
      {/* Creiamo 50 div, alternando le immagini */}
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          className={`food-item ${pattern[index % pattern.length]}`}
        />
      ))}
    </div>
  );
};

export default FoodBackground;
