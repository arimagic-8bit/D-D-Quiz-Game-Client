import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import {QuestionProvider} from './lib/QuestionProvider';

ReactDOM.render(
  <Router>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </Router>
  ,document.getElementById('root')
);


