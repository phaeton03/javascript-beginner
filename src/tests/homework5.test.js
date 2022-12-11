/**
 * @jest-environment jsdom
 */
import {jest} from '@jest/globals';

import {arraySum, doubleArrayElements, arr, printMaxAndMin} from '../topics/homework5.js'

afterEach(() => {
    jest.clearAllMocks();
});

describe('printMaxAndMin', function () {
    it('should call console.log', () => {
        const logSpy = jest.spyOn(console, 'log');
        printMaxAndMin(arr);

        expect(logSpy).toHaveBeenCalledTimes(1);
    });
})

describe('arraySum', function () {
    it('should call console.log', () => {
        const logSpy = jest.spyOn(console, 'log');
        arraySum();

        expect(logSpy).toHaveBeenCalledTimes(1);
    });
})

describe('doubleArrayElements', function () {
    const ARR = Array.from({length: 5}, (a, i) => i);
    const EXPECTED_ARRAY = ARR.map((v) => v * 2);

    it('should double array', () => {
        expect(doubleArrayElements(ARR)).toEqual(EXPECTED_ARRAY);
    });

    it('should return type be array', () => {
       expect(doubleArrayElements()).toBeInstanceOf(Array);
    });
})