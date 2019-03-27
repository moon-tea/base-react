import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const defaultStore = (reducer, api) => {
    return createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
};

export default defaultStore;
