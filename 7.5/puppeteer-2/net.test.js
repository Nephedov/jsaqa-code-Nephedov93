const {
  clickElement,
  getText,
  clickXPathElement,
} = require("./lib/commands.js");
let page;

describe("Ticket booking", () => {
  let freeSeat =
    ".buying-scheme__wrapper .buying-scheme__chair:not(.buying-scheme__chair_taken, .buying-scheme__chair_selected)";
  let takenSeat = ".buying-scheme__wrapper .buying-scheme__chair_taken";
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(
      page,
      ".movie-seances__time:not(.acceptin-button-disabled)"
    );
  });

  afterEach(() => {
    page.close();
  });

  test("The single ticket booking", async () => {
    await clickElement(page, freeSeat);
    await clickXPathElement(
      page,
      "//button[contains(text(), 'Забронировать')]"
    );
    await clickXPathElement(
      page,
      "//button[contains(text(), 'Получить код бронирования')]"
    );
    expect(await page.waitForSelector("img[src='i/QR_code.png']"));
    expect(await getText(page, "p.ticket__hint")).toContain(
      "Покажите QR-код нашему контроллеру для подтверждения бронирования."
    );
  });

  test("Booking two tickets", async () => {
    await clickElement(page, freeSeat);
    await clickElement(page, freeSeat);
    await clickXPathElement(
      page,
      "//button[contains(text(), 'Забронировать')]"
    );
    await clickXPathElement(
      page,
      "//button[contains(text(), 'Получить код бронирования')]"
    );
    expect(await page.waitForSelector("img[src='i/QR_code.png']"));
    expect(await getText(page, "p.ticket__hint")).toContain(
      "Покажите QR-код нашему контроллеру для подтверждения бронирования."
    );
  });

  test("Attempt to book an occupied seat", async () => {
    await clickElement(page, takenSeat);
    expect(
      await page.$eval("button.acceptin-button", (link) =>
        link.getAttribute("disabled")
      )
    ).toBe("true");
  });
});
