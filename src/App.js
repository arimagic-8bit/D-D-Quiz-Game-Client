import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";
import GameScreen from './pages/GameScreen'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/game" component={GameScreen}/>
      </Switch>
    </div>
  );
}

export default App;
