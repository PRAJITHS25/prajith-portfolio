import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/homePage";

test.describe("Home page", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test("check title", async ({ page }) => {
    await expect(page).toHaveTitle("Prajith S — QA Automation Engineer");
  });

  test("home page should have a heading", async () => {
    await expect(homePage.heading).toHaveText("Prajith S");
  });
});