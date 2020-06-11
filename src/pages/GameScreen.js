import React, { Component } from 'react'
import {QuestionConsumer} from './../lib/QuestionProvider'


class GameScreen extends Component {
    
    componentDidMount() {
        this.props.getAllQuestions()
    }


    render() {
        const {oneQuestion, questions, answeredQuestions, points} = this.props;

        return (
            <div className='question-container'>
               
                <div className='red-container'>
                    <div className='points'>
                        <p>Points: {points}</p>
                    </div>
                    <div className='white-container'>
                       <p className='number-question'>Question {answeredQuestions.length} / {questions.length}</p>
                       <p className='theQuestion'>{oneQuestion.question}</p>
                       <img src={oneQuestion.picture} alt="Random gif that makes you laugh"/> 
                    </div>
                    
                </div>
                <div className='answers-container'>
                    <p>Select the correct answer</p>
                    <ol>
                        {oneQuestion.question && oneQuestion.answers.map((answer, index) => {
                        return (
                                <li>
                                    <button key={index}>{answer}</button>
                                </li>
                        )})}  
                    </ol>
                </div>

            </div>
        )
    }
}

export default QuestionConsumer(GameScreen)
