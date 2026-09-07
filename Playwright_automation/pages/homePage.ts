import { Page } from "@playwright/test";

export class HomePage {
  heading;

  constructor(private page: Page) {
    this.heading = this.page.locator(".nav-brand");
  }

  async open() {
    await this.page.goto("/");
  }
}