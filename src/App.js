import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to {title}</h1>
                    <p>
                        Edit <code>src/App.js</code>
                        and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
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
