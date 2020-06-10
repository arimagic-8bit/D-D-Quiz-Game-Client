import React from "react";
import { Link } from "react-router-dom";

export default function SplashScreen() {
  return (
    <div>
      <h1>A D&D 5ed QUIZ</h1>
      <p>
        Adventurer, test your knowledge in this game plenty of misterious
        questions and reveal your destiny
      </p>
      <Link to={"/game"}>Start Game</Link>
    </div>
  );
}
