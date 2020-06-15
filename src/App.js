import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";
import GameScreen from './pages/GameScreen'
import EndScreen from './pages/EndScreen'

function App() {
  return (
    <div className='main'>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route path="/game" component={GameScreen}/>
        <Route path="/end" component={EndScreen}/>
      </Switch>
    </div>
  );
}

export default App;
