import React from 'react';
import axios from 'axios';

const {Consumer, Provider} = React.createContext();


function QuestionConsumer(WrappedComponent) {
    return function (props) {
        return (
            <Consumer>
                {(valueFromProvider) => (
                    <WrappedComponent
                        {...props}
                        questions={valueFromProvider.questions}
                        oneQuestion={valueFromProvider.oneQuestion}
                        answeredQuestions={valueFromProvider.answeredQuestions}
                        points={valueFromProvider.points}
                        style={valueFromProvider.style}
                        isAnswered={valueFromProvider.isAnswered}
                        showButton={valueFromProvider.showButton}
                        getAllQuestions={valueFromProvider.getAllQuestions}
                        getRandomQuestion={valueFromProvider.getRandomQuestion}
                        morePoints={valueFromProvider.morePoints}
                        isCorrect={valueFromProvider.isCorrect}
                        nextQuestion={valueFromProvider.nextQuestion}
                    />
                )}
            </Consumer>
        )
    }
}

class QuestionProvider extends React.Component {

    state = {
        questions: [],
        oneQuestion: {},
        answeredQuestions:[],
        points: 0,
        style: ['answer', 'answer', 'answer'],
        isAnswered: false,
        showButton: false
    }

    getAllQuestions = () => {
        axios
        .get('http://localhost:5000/api')
        .then((response) => {
            this.setState({questions: response.data});
            this.getRandomQuestion()
        })
        .catch((err) => console.log(err))
    };

    getRandomQuestion = () => {
        const {questions, answeredQuestions} = this.state;
        const randomQuestion = questions[Math.floor(Math.random()*questions.length)];
        for (let i = 0; i<questions.length; i++) {
            
            if(answeredQuestions.length === 0 || answeredQuestions[i]._id !== randomQuestion._id) {
               const newAnswered = [...answeredQuestions];
               newAnswered.push(randomQuestion);
               this.setState({oneQuestion:randomQuestion, answeredQuestions:newAnswered});
               break; 
            }
        }
    }
    
    morePoints = () => {
        const {oneQuestion, points} = this.state;
        let updatedPoints = points;
        updatedPoints += oneQuestion.points
        this.setState({points: updatedPoints})
    }

    isCorrect = (index) => {
        const {style, isAnswered, oneQuestion, showButton} = this.state;

        if(!isAnswered) {
           const updateStyle = style
            if (index === oneQuestion.correctAnswer) {
                updateStyle[index] += ' ' + 'correct';
                this.morePoints()
            }
            else {
                updateStyle[index] += ' ' + 'incorrect';
            } 
            this.setState({isAnswered:!isAnswered, style:updateStyle, showButton:!showButton})
        }
    }

    nextQuestion = () => {
        const {isAnswered, showButton} = this.state;
        const resetStyle = ['answer', 'answer', 'answer'];
        this.setState({
            isAnswered:!isAnswered, 
            showButton:!showButton,
            style: resetStyle
        });
        this.getRandomQuestion()
    }

    render() {

        const {
            questions, 
            oneQuestion, 
            answeredQuestions, 
            points, 
            style, 
            isAnswered,
            showButton
        } = this.state;

        const {
            getAllQuestions, 
            getRandomQuestion, 
            morePoints, 
            isCorrect, 
            nextQuestion
        } = this;

        return (
            <Provider value={{
                questions, 
                oneQuestion, 
                answeredQuestions, 
                points, 
                style, 
                isAnswered, 
                showButton, 
                getAllQuestions, 
                getRandomQuestion, 
                morePoints, 
                isCorrect, 
                nextQuestion
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export  {QuestionProvider, QuestionConsumer}
