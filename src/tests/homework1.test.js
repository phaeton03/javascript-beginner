/**
 * @jest-environment jsdom
 */
import {multiplyAndSum, getSymbolsLength, sumThreeDigitNumber} from "../topics/homework1.js";
import {jest} from '@jest/globals';

describe('multiplyAndSum', function () {
    it('is a function', () => {
        expect(multiplyAndSum).toBeInstanceOf(Function);
    });

    it('should call console.log', () => {
        const logSpy = jest.spyOn(console, 'log');
        multiplyAndSum(3,4);
        expect(logSpy).toHaveBeenCalled();
    });
});

describe('getSymbolsLength', function () {
    it('is a function', () => {
        expect(getSymbolsLength).toBeInstanceOf(Function);
    });

    it('should call console.log', () => {
        const logSpy = jest.spyOn(console, 'log');
        getSymbolsLength('3','4');
        expect(logSpy).toHaveBeenCalled();
    });
});

describe('sumThreeDigitNumber', function () {
    it('is a function', () => {
        expect(sumThreeDigitNumber).toBeInstanceOf(Function);
    });

    it('should correct sum digits and make console call', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "123");

        const logSpy = jest.spyOn(console, 'log');
        sumThreeDigitNumber();
        expect(logSpy).toHaveBeenCalled();
    });

    it('should throw exception cause digits more than 3', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "12345");

        expect(sumThreeDigitNumber).toThrow();
    });

    it('should throw exception cause digits less than 3', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "12");

        expect(sumThreeDigitNumber).toThrow();
    });

    it('should throw exception cause digits less than 3', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "12");

        expect(sumThreeDigitNumber).toThrow();
    });
});