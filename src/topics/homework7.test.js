/**
 * @jest-environment jsdom
 */
const container = window.document.body;
container.innerHTML = fs.readFileSync("./src/homework7.html", "utf8");

import functions from "../topics/homework7.js";
import fs from "fs";
import "@inrupt/jest-jsdom-polyfills";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  container.innerHTML = fs.readFileSync("./src/homework7.html", "utf8");
});

describe("hideInput", function () {
  it("should hide button when input is empty", () => {
    functions.hideInput();

    expect(container.querySelector(".button").hidden).toBeTruthy();
  });

  it("should show button when input is not empty", () => {
    const input = document.querySelector(".text");
    input.value = "text";
    functions.hideInput();

    expect(container.querySelector(".button").hidden).toBeFalsy();
  });
});

describe("addParagraph", function () {
  it("should add paragraph", () => {
    const paragraphsInitCount = document.querySelectorAll("p").length;
    functions.addParagraph();
    const paragraphsEndCount = document.querySelectorAll("p").length;

    expect(paragraphsInitCount + 1).toBe(paragraphsEndCount);
  });
});

describe("deleteFirstParagraph", function () {
  const MAX_PARAGRAPHS = 5;
  const FIRST_PARAGRAPH_TEXT = "Paragraph 1";
  it("should delete first paragraph", () => {
    const paragraphsInitCount = document.querySelectorAll("p").length;
    for (let i = paragraphsInitCount; i <= MAX_PARAGRAPHS; i++) {
      functions.addParagraph();
    }
    functions.deleteFirstParagraph();
    const paragraphsEndCount = document.querySelectorAll("p").length;

    expect(paragraphsEndCount).toBe(MAX_PARAGRAPHS);
  });

  it("should not be more than MAX_PARAGRAPHS", () => {
    const paragraphsInitCount = document.querySelectorAll("p").length;

    expect(paragraphsInitCount).toBeLessThanOrEqual(MAX_PARAGRAPHS);

    for (let i = paragraphsInitCount; i <= MAX_PARAGRAPHS; i++) {
      functions.addParagraph();
    }
    functions.deleteFirstParagraph();

    const firstParagraph = document.querySelector("p");

    expect(firstParagraph.innerText).not.toBe(FIRST_PARAGRAPH_TEXT);
  });
});
