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
                        getAllQuestions={valueFromProvider.getAllQuestions}
                        getRandomQuestion={valueFromProvider.getRandomQuestion}
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
        points: 0
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

    render() {

        const {questions, oneQuestion, answeredQuestions, points} = this.state;

        const {getAllQuestions, getRandomQuestion} = this;

        return (
            <Provider value={{questions, oneQuestion, answeredQuestions, points, getAllQuestions, getRandomQuestion}}>
                {this.props.children}
            </Provider>
        )
    }
}

export  {QuestionProvider, QuestionConsumer}
