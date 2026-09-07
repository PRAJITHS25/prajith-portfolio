import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
    test.beforeEach(async({ page }) => {
        await page.goto("https://prajith.vercel.app/")
    });
    test("Check title", async({ page }) => {
        await expect(page).toHaveTitle("Prajith S — QA Automation Engineer")
    });
    test("home page should have a heading", async({ page }) => {
        const heading = page.locator(".nav-brand");
        await expect(heading).toHaveText("Prajith S")
    });
})