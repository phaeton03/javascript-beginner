/**
 * @jest-environment jsdom
 */
import { jest } from "@jest/globals";

import { getDate, minutesPass, minimumDate } from "./homework8.js";

describe("getDate", function () {
  const date = "12.12.2022";
  const MONDAY = "Monday";
  const INCORRECT_DATE_FORMAT = "12/2222/tt";

  it("should return correct day of week", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => date);

    expect(getDate()).toBe(MONDAY);
  });

  it("should throw Invalid date format", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementation(() => INCORRECT_DATE_FORMAT);

    expect(() => getDate()).toThrow();
  });
});

describe("minutesPass", function () {
  const date = "12.12.2022 13:01:00";
  const passingMinutes = 781;

  it("should calculate correct passing minutes", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(date));

    expect(minutesPass()).toBe(passingMinutes);
  });

  it("should call console", () => {
    const logSpy = jest.spyOn(console, "log");

    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});

describe("minimumDate", function () {
  let birthDate2 = new Date("12.12.1922");
  let birthDate1 = new Date("12.10.1989");

  it("should return which birthday is closer", () => {
    expect(minimumDate(birthDate1, birthDate2)).toBe(birthDate1);
  });
});
