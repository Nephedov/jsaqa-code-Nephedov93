let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test(
    "The h1 header content",
    async () => {
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForSelector("h1");
      const title2 = await page.title();
      expect(title2).toEqual(
        "GitHub for teams · Build like the best teams on the planet · GitHub"
      );
    },
    10 * 1000
  );

  test(
    "The first link attribute",
    async () => {
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    },
    7 * 1000
  );

  test(
    "The page contains Sign in button",
    async () => {
      const btnSelector = ".btn-large-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      expect(actual).toContain("Get started with Team");
    },
    6 * 1000
  );
});

describe("GitHub another headers content", () => {
  test(
    "The future page header content",
    async () => {
      await page.goto("https://github.com/features");
      await page.waitForSelector("h1", {
        visible: true,
      });
      const actual = await page.$eval("h1", (link) => link.innerText);
      expect(actual).toContain("The tools you need to build what you want.");
    },
    5 * 1000
  );

  test("The collections page header content", async () => {
    await page.goto("https://github.com/collections");
    await page.waitForSelector("h1", {
      visible: true,
    });
    const actual = await page.$eval("h1", (link) => link.innerText);
    expect(actual).toContain("Collections");
  });

  test("The pricing page header content", async () => {
    await page.goto("https://github.com/pricing");
    await page.waitForSelector("h1", {
      visible: true,
    });
    const actual = await page.$eval("h1", (link) => link.innerText);
    expect(actual).toContain("Get the complete developer platform.");
  });
});

describe("The netology headers content", () => {
  test(
    "The free page header content",
    async () => {
      await page.goto("https://netology.ru/free", { timeout: 60 * 1000 });
      await page.waitForSelector("h1", {
        visible: true,
      });
      const actual = await page.$eval("h1", (link) => link.textContent);
      expect(actual).toContain("Бесплатные курсы, лекции и полезные материалы");
    },
    90 * 1000
  );

  test(
    "The blog page header content",
    async () => {
      await page.goto("https://netology.ru/blog", { timeout: 60 * 1000 });
      await page.waitForSelector("header h1 span", {
        visible: true,
      });
      const actual = await page.$eval(
        "header h1 span",
        (link) => link.innerText
      );
      expect(actual).toContain("всё о карьере и профессиях");
    },
    90 * 1000
  );

  test(
    "The data-science page header content",
    async () => {
      await page.goto("https://netology.ru/data-science", {
        timeout: 60 * 1000,
      });
      await page.waitForSelector("h1", {
        visible: true,
      });
      const actual = await page.$eval("h1", (link) => link.innerText);
      expect(actual).toContain("Аналитика");
    },
    90 * 1000
  );
});
