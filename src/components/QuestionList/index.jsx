import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import MultipleChoice from '../components/MultipleChoice';
import api from '../../utils/api';

import './_questionList.scss';

let data = [];
let answers = [];

//call api TODO move later
api.getQuestions().then(response => {
    console.log(response);
    data = response;
});

api.getAnswers().then(response => {
    console.log(response);
    data = response;
});

//const data = api.getQuestions();
//api.getQuestions();
//api.getAnswers();

//let question = {};

export const QuestionList = () => (
    <div className="question-list">
        <Router>
            <ul>
                {data.map(question => (
                    <li key={question.id}>
                        <Link to={`/question/${question.id}`}>{question.title}</Link>
                    </li>
                ))}
            </ul>
            <Route path="/question/:id" exact render={() => {}} />
        </Router>
    </div>
);

QuestionList.displayName = 'QuestionList';

QuestionList.propTypes = {
    //
};

QuestionList.defaultProps = {
    //
};

export default QuestionList;
