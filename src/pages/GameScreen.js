import React, { Component } from 'react'
import {QuestionConsumer} from './../lib/QuestionProvider'


class GameScreen extends Component {
    
    componentDidMount() {
        this.props.getAllQuestions()
    }

    render() {
        const {
            oneQuestion, 
            questions, 
            answeredQuestions, 
            points, 
            style,
            showButton
        } = this.props;

        let actualNumber = answeredQuestions.length;
        const totalNumber = questions.length;

        return (
            <div className='question-container'>
               
                <div className='red-container'>
                    <div className='points'>
                        <p>Points: {points}</p>
                    </div>
                    <div className='white-container'>
                       <p className='number-question'>Question {actualNumber} / {totalNumber}</p>
                       <p className='theQuestion'>{oneQuestion.question}</p>
                       <img src={oneQuestion.picture} alt="Random gif that makes you laugh"/> 
                    </div>
                    
                </div>
                <div className='answers-container'>
                    <p>Select the correct answer</p>
                    <ol>
                        {oneQuestion.question && oneQuestion.answers.map((answer, index) => {
                        return (
                                <li key={index}>
                                    <button onClick={() => this.props.isCorrect(index)} className={style[index]}>{answer}</button>
                                </li>
                        )})}  
                    </ol>
                    {
                        showButton ? 
                        <div className='next-btn'>
                            <button  onClick={this.props.nextQuestion}>{actualNumber === totalNumber ? 'Finish quiz' : '➡'}</button>
                        </div> 
                        : 
                        null
                    }
                </div>

            </div>
        )
    }
}

export default QuestionConsumer(GameScreen)
