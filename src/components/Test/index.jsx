import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//import './_test.scss';

const Index = () => <div>Index</div>;
const About = () => <div>About</div>;
const Users = () => <div>Users</div>;

export const Test = ({ clickFn, className }) => (
    <div className={'test ' + className}>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </Router>
    </div>
);

Test.propTypes = {
    className: PropTypes.string,
};

Test.defaultProps = {
    className: '',
};

export default Test;
