import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import api from '../../utils/api';

//import './_multipleChoice.scss';
//let question = {};
//let answers = [];

export class MutlipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {},
            answers: [],
        };
    }

    componentDidMount() {
        api.getQuestion(this.props.match.params.id).then((response) => {
            console.log(response);
            this.setState({
                question: response,
            });
        });
        api.getAnswer(this.props.match.params.id).then((response) => {
            console.log(response);
            this.setState({
                answers: response,
            });
        });
    }

    render() {
        console.log(this.state.question);
        return (
            <div>
                <h1>question {this.state.question.id}</h1>
                <p>{this.state.question.title}</p>
                <ol>
                    {this.state.answers.map((answer) => (
                        <li key={answer.id} onClick={() => console.log(answer.isCorrect)}>
                            {answer.title}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

MutlipleChoice.displayName = 'MutlipleChoice';

MutlipleChoice.propTypes = {
    //question: PropTypes.object,
    //answer: PropTypes.array,
};

MutlipleChoice.defaultProps = {
    //match: {},
};

export default MutlipleChoice;
