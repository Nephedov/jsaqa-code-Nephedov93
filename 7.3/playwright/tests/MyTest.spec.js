const user = require("../user");

const { test, expect } = require("@playwright/test");

test.describe("authorization", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout * 3);
    await page.goto("https://netology.ru/?modal=sign_in");
  });

  test("valid authorization", async ({ page }) => {
    await page.screenshot({ path: "./screenshots/validScreenshot1.png" });
    await page.getByPlaceholder("Email").click();
    await page.screenshot({ path: "./screenshots/validScreenshot2.png" });
    await page.getByPlaceholder("Email").fill(user.email);
    await page.screenshot({ path: "./screenshots/validScreenshot3.png" });
    await page.getByPlaceholder("Пароль").click();
    await page.screenshot({ path: "./screenshots/validScreenshot4.png" });
    await page.getByPlaceholder("Пароль").fill(user.password);
    await page.screenshot({ path: "./screenshots/validScreenshot5.png" });
    await page.getByTestId("login-submit-btn").click();
    await page.screenshot({ path: "./screenshots/validScreenshot6.png" });
    await expect(page.locator("h2")).toContainText("Мои курсы и профессии", {
      useInnerText: true,
      timeout: 60 * 1000,
    });
    await page.screenshot({ path: "./screenshots/validScreenshot7.png" });
  }),
    test("invalid authorization", async ({ page }) => {
      await page.screenshot({ path: "./screenshots/invalidScreenshot1.png" });
      await page.getByPlaceholder("Email").click();
      await page.screenshot({ path: "./screenshots/invalidScreenshot2.png" });
      await page.getByPlaceholder("Email").fill("InvalidEmail@mail.ru");
      await page.screenshot({ path: "./screenshots/invalidScreenshot3.png" });
      await page.getByPlaceholder("Пароль").click();
      await page.screenshot({ path: "./screenshots/invalidScreenshot4.png" });
      await page.getByPlaceholder("Пароль").fill("InvalidPassword");
      await page.getByTestId("login-submit-btn").click();
      await page.screenshot({ path: "./screenshots/invalidScreenshot5.png" });
      await expect(page.getByTestId("login-error-hint")).toHaveText(
        "Вы ввели неправильно логин или пароль",
        { timeout: 10 * 1000 }
      );
      await page.screenshot({ path: "./screenshots/invalidScreenshot6.png" });
    });
});
