/**
 * @jest-environment jsdom
 */
import {
  sumNumbers,
  showMultiplicationTableOfNumber,
  arithmeticMeanOddNumbers,
} from "../topics/homework3.js";
import { jest } from "@jest/globals";

afterEach(() => {
  jest.clearAllMocks();
});

describe("sumNumbers", function () {
  const DEFAULT_SUM_NUMBERS = 3825;

  it("is a function", () => {
    expect(sumNumbers).toBeInstanceOf(Function);
  });

  it("should return correct result", () => {
    expect(sumNumbers()).toBe(DEFAULT_SUM_NUMBERS);
  });
});

describe("showMultiplicationTableOfNumber", function () {
  it("is a function", () => {
    expect(showMultiplicationTableOfNumber).toBeInstanceOf(Function);
  });

  it("should call console.log", () => {
    const logSpy = jest.spyOn(console, "log");
    showMultiplicationTableOfNumber();
    expect(logSpy).toHaveBeenCalledTimes(9);
  });
});

describe("arithmeticMeanOddNumbers", function () {
  it("is a function", () => {
    expect(arithmeticMeanOddNumbers).toBeInstanceOf(Function);
  });

  it("should call console.log", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "10");
    const logSpy = jest.spyOn(console, "log");
    arithmeticMeanOddNumbers();
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  it("should throw exception cause of undefined n", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => undefined);

    () => expect(arithmeticMeanOddNumbers()).toThrow();
  });

  it("should throw exception cause n not a number", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "abbbb");

    () => expect(arithmeticMeanOddNumbers()).toThrow();
  });
});
