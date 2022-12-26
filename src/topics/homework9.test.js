/**
 * @jest-environment jsdom
 */
import { jest } from "@jest/globals";

import {
  isSquareTriangle,
  printSquareAndСircumferenceLength,
  squareRoots,
} from "./homework9.js";

describe("isSquareTriangle", function () {
  it("should be a square triangle", () => {
    const a = 4;
    const b = 3;
    const c = 5;

    expect(isSquareTriangle(a, b, c)).toBeTruthy();
  });

  it("should not be a square triangle", () => {
    const a = 4;
    const b = 3;
    const c = 6;

    expect(isSquareTriangle(a, b, c)).toBeFalsy();
  });

  it("should throw error because of incorrect params", () => {
    const a = 4;
    const b = 3;
    const c = "ghg";

    expect(() => isSquareTriangle(a, b, c)).toThrow();
  });
});

describe("printSquareAndСircumferenceLength", function () {
  it("should be a square triangle", () => {
    const logSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockImplementation(() => 10);
    printSquareAndСircumferenceLength();

    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});

describe("squareRoots", function () {
  const EMPTY_ARRAY = [];
  const EQUAL_ROOTS = [-1, -1];
  const DIFF_ROOTS = [-1, -2];

  it("should throw exception not square equation", () => {
    expect(() => squareRoots(0, 5, 5)).toThrow();
  });

  it("should throw exception incorrect params", () => {
    expect(() => squareRoots(0, "50/50", 5)).toThrow();
  });

  it("should return empty array", () => {
    expect(squareRoots(1, 4, 5)).toEqual(EMPTY_ARRAY);
  });

  it("should return two diff roots", () => {
    expect(squareRoots(1, 3, 2)).toEqual(DIFF_ROOTS);
  });

  it("should return two equal roots", () => {
    expect(squareRoots(1, 2, 1)).toEqual(EQUAL_ROOTS);
  });

  it("should return type be array", () => {
    expect(squareRoots(1, 3, 2)).toBeInstanceOf(Array);
  });
});
