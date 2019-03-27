import React, { Component } from 'react';

import Test from '../../components/Test/index.jsx';
import createStore from '../../utils/createStore';
import connectWithProvider from '../../utils/connectWithProvider.jsx';

import reducer from './reducer';
const api = {};
import { init } from './actions.js';

const mapStateToProps = state => ({
    store: state,
});

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
});

const TestConnection = connectWithProvider(Test, mapStateToProps, mapDispatchToProps);

export class TestContainer extends Component {
    componentWillMount() {
        //Do all the setup here to build the component
        this.store = createStore(reducer, api);

        //Here is where you would dispatch any actions that need to happen for setup
        this.store.dispatch(init());
    }

    render() {
        return <TestConnection store={this.store} />;
    }
}

//const TestContainer = () => <Test />;

TestContainer.propTypes = {};

TestContainer.defaultProps = {};

export default TestContainer;

/*
//import PropTypes from 'prop-types';

//Dev Page Stuff
import createStore from '../../../../utils/createStore';
import api from './LoginContainerPageAPI';
//import config from './LoginContainerPageConfig';


export class LoginPage extends Component {
    componentWillMount() {
        //Do all the setup here to build the component
        this.store = createStore(reducer, api);

        //Here is where you would dispatch any actions that need to happen for setup
    }

    render() {
        return <LoginContainer store={this.store} />;
    }
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;

*/
