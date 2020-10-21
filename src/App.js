import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Button from './components/Button';

class App extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="App">
                <Router>
                    <Route exact path="/">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to {title}</h1>
                            <p>
                                Edit <code>src/App.js</code>
                                and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </Route>
                    <Route exact path="/new">
                        <h1> Hello World </h1>
                    </Route>
                    {/*<Route render={() => <Button clickFn={() => {}} />} />*/}
                </Router>
            </div>
        );
    }
}

App.displayName = 'App';

//App.propTypes = {
//    title: PropTypes.string,
//};

App.defaultProps = {
    title: 'React',
};

export default App;
