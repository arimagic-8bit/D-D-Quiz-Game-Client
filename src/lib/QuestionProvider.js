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
                        getAllQuestions={valueFromProvider.getAllQuestions}
                    />
                )}
            </Consumer>
        )
    }
}

class QuestionProvider extends React.Component {

    state = {
        questions: []
    }

    getAllQuestions = () => {
        axios
        .get('http://localhost:5000/api/questions')
        .then((response) => {
            this.setState({questions: response.data});
        })
        .catch((err) => console.log(err))
    };

    render() {

        const {questions} = this.state;

        const {getAllQuestions} = this;

        return (
            <Provider value={{questions, getAllQuestions}}>
                {this.props.children}
            </Provider>
        )
    }
}

export  {QuestionProvider, QuestionConsumer}
