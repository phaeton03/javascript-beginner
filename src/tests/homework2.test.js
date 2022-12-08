/**
 * @jest-environment jsdom
 */
import {getNumberOfMonth, maxOfTwoNumbers, isCircleFitIntoSquare} from "../topics/homework2.js";
import {jest} from '@jest/globals';

describe('maxOfTwoNumbers', function () {
    it('is a function', () => {
        expect(maxOfTwoNumbers).toBeInstanceOf(Function);
    });

    it('should call console.log', () => {
        const logSpy = jest.spyOn(console, 'log');
        maxOfTwoNumbers(3, 4);
        expect(logSpy).toHaveBeenCalled();
    });
});

describe('getNumberOfMonth', function () {
    it('should call console log', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "5");

        const logSpy = jest.spyOn(console, 'log');
        getNumberOfMonth();
        expect(logSpy).toHaveBeenCalled();
    });

    it('should throw exception cause number of month is more than 12', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "13");

        expect(getNumberOfMonth).toThrow();
    });

    it('should throw exception cause number of month is less than 1', () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "0");

        expect(getNumberOfMonth).toThrow();
    });
});

describe('getNumberOfMonth', function () {
    const EPS = 0.0005;
    const NEGATIVE_SQUARE_AREA = -5;
    const NEGATIVE_CIRCLE_AREA = -5;

    it('is a function', () => {
        expect(isCircleFitIntoSquare).toBeInstanceOf(Function);
    });

    it('should get error cause of NEGATIVE_SQUARE_AREA', () => {
        () => expect(isCircleFitIntoSquare(NEGATIVE_SQUARE_AREA, 5, EPS)).toThrow();
    });

    it('should get error cause of NEGATIVE_CIRCLE_AREA', () => {
        () => expect(isCircleFitIntoSquare(5, NEGATIVE_CIRCLE_AREA, EPS)).toThrow();
    });

    it('should return true', () => {
        const radius = 4;
        const squareSide = 10;
        const circleArea = Math.PI * Math.pow(radius, 2);
        const squareArea = squareSide * squareSide;

        expect(isCircleFitIntoSquare(circleArea, squareArea, EPS)).toBeTruthy();
    });

    it('should return true because circle is totally fit into square', () => {
        const radius = 5;
        const squareSide = 10;
        const circleArea = Math.PI * Math.pow(radius, 2);
        const squareArea = squareSide * squareSide;

        expect(isCircleFitIntoSquare(circleArea, squareArea, EPS)).toBeTruthy();
    });


    it('should return false', () => {
        const radius = 8;
        const squareSide = 10;
        const circleArea = Math.PI * Math.pow(radius, 2);
        const squareArea = squareSide * squareSide;

        expect(isCircleFitIntoSquare(circleArea, squareArea, EPS)).toBeFalsy();
    });

});

