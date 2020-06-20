import React, { Component } from 'react'
import {QuestionConsumer} from './../lib/QuestionProvider'
import {Link} from 'react-router-dom'


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
                    <div className='p-container'>
                        <p>Select the correct answer</p>
                    </div>
                    <div className='answer-part'>
                        <div className='center-answer'>
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
                                {actualNumber === totalNumber ?
                                    <Link to={'/end'} className='finish'>Finish quiz!</Link>
                                : 
                                    <button onClick={this.props.nextQuestion}>➡</button>

                                }
                            </div> 
                            : 
                            null
                        } 
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        )
    }
}

export default QuestionConsumer(GameScreen)
