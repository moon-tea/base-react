import { defaultStore } from '../createStore.js';

describe('Create Store Wrapper', () => {
    const reducer = () => {};

    it('should throw an error if reducer is not provided', () => {
        let store, error;
        try {
            store = defaultStore();
        } catch (ex) {
            error = ex.message;
        }

        expect(store).toBe(undefined);
        expect(error).toBe('Expected the reducer to be a function.');
    });

    it('should create a store from the wrapper', () => {
        const store = defaultStore(reducer);
        const methods = Object.keys(store);

        expect(methods).toContain('getState');
        expect(methods).toContain('dispatch');
    });
});
