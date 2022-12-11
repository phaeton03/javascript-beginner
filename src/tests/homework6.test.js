import {jest} from '@jest/globals';

import {diff, isWord, pow} from '../topics/homework6.js'

describe('diff', function () {
    it('should return correct value', () => {
        const min = 2;
        const max = 5;
        const expectedResult = 3;

        expect(diff(max, min)).toBe(expectedResult);
    });

    it('should return correct value', () => {
        const min = 2;
        const max = 5;
        const expectedResult = 3;

        expect(diff(min, max)).toBe(expectedResult);
    });
})

describe('isWord', function () {
    it('should be only one word and return true', () => {
        const str = 'word';

        expect(isWord(str)).toBeTruthy();
    });

    it('should be more than one word and return false', () => {
        const str = 'word and word';

        expect(isWord(str)).toBeFalsy();
    });
})

describe('pow', function () {
    const TEN = 10;
    const POW = 3;
    const EXPECTED_RESULT = 1000;

    it('should return correct value', () => {

        expect(pow(TEN, POW)).toBe(EXPECTED_RESULT);
    });
})