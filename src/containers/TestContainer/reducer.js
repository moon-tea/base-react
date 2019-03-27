import constants from './constants';

const defaultTestState = {};

export const testReducer = (state = defaultTestState, action) => {
    switch (action.type) {
        case constants.INIT: {
            return {
                ...state,
                init: 'hello world',
            };
        }

        default:
            return state;
    }
};

export default testReducer;
