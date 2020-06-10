import React from "react";
import { Link } from "react-router-dom";

export default function SplashScreen() {
  return (
    <div className='splash-screen'>
      <h1>A <span className='dnd'>D&D</span> 5ed QUIZ</h1>
      <p>
        Adventurer, test your knowledge in this game plenty of misterious
        questions and reveal your destiny
      </p>
      <Link className='start-btn' to={"/game"}>Start Game</Link>
    </div>
  );
}
