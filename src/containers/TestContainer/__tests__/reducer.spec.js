import reducer from '../reducer';

describe('Test Reducer', () => {
    it('should init with the message "hello world"', () => {
        const state = {};

        const action = {
            type: 'INIT',
        };

        const result = reducer(state, action);
        expect(result.init).toEqual('hello world');
    });
});
