import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
    test.beforeEach(async({ page }){
        await page.goto("https://prajith.vercel.app/")
    });
    test("Check title", ({ page }) {
        await expect(page).toHaveTitle("Prajith S — QA Automation Engineer")
    });
})