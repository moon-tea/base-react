import { init } from '../actions';
import * as Constants from '../constants';

describe('Test Actions', () => {
    it('should create an init action', () => {
        const expected = {
            type: Constants.INIT,
        };

        const result = init();
        expect(result).toEqual(expected);
    });
});
