const {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} = require("cucumber");
const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const {
  clickElement,
  getText,
  clickXPathElement,
} = require("../../lib/commands.js");

setDefaultTimeout(60 * 1000);

Before(async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on poster page", async function () {
  return await this.page.goto("http://qamid.tmweb.ru/client/", {
    setTimeout: 60 * 1000,
  });
});

When("user selects available session", async function () {
  return await clickElement(
    this.page,
    ".movie-seances__time:not(.acceptin-button-disabled)"
  );
});

When("user reserves one free seat", async function () {
  await clickElement(
    this.page,
    ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair_taken, .buying-scheme__chair_selected)"
  );
  await clickXPathElement(
    this.page,
    "//button[contains(text(), 'Забронировать')]"
  );
  return await clickXPathElement(
    this.page,
    "//button[contains(text(), 'Получить код бронирования')]"
  );
});

When("user selects the occupied seat", async function () {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper .buying-scheme__chair_taken"
  );
});

When("user reserves two free seat", async function () {
  await clickElement(
    this.page,
    ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair_taken, .buying-scheme__chair_selected)"
  );
  await clickElement(
    this.page,
    ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair_taken, .buying-scheme__chair_selected)"
  );
  await clickXPathElement(
    this.page,
    "//button[contains(text(), 'Забронировать')]"
  );
  return await clickXPathElement(
    this.page,
    "//button[contains(text(), 'Получить код бронирования')]"
  );
});

Then("user sees qr code", async function () {
  const actualImgSrc = await this.page.$eval("img.ticket__info-qr", (link) =>
    link.getAttribute("src")
  );
  const expectedImgSrc = "i/QR_code.png";
  expect(actualImgSrc).contains(expectedImgSrc);
});

Then("button {string} is disabled", async function (string) {
  const actualAttribtue = await this.page.$eval(
    "button.acceptin-button",
    (link) => link.getAttribute("disabled")
  );
  const actualText = await getText(this.page, "button.acceptin-button");
  expect(actualAttribtue).contain("true");
  expect(actualText).contain(string);
});
