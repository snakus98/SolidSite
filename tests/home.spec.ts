import { test, expect } from "@playwright/test";

test.describe("Home page — Punic Systems", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // ── Navigation ──────────────────────────────────────────────────────────────
  test("navbar contains the primary section links", async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) < 1024) test.skip();
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Frameworks" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("CTA 'Book a Consultation' is present in header", async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) < 1024) test.skip();
    await expect(
      page.getByRole("link", { name: /Book a Consultation/ }).first()
    ).toBeVisible();
  });

  test("navbar links have correct hrefs", async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) < 1024) test.skip();
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/#services");
    await expect(nav.getByRole("link", { name: "Frameworks" })).toHaveAttribute("href", "/#frameworks");
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    await expect(nav.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });

  // ── Mobile menu ─────────────────────────────────────────────────────────────
  test("mobile hamburger button is accessible", async ({ page, viewport }) => {
    if ((viewport?.width ?? 1280) >= 768) test.skip();
    const btn = page.getByRole("button", { name: /navigation/i });
    await expect(btn).toBeVisible();
  });

  // ── Hero ────────────────────────────────────────────────────────────────────
  test("hero heading is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("organizations");
  });

  test("hero has Book a Consultation and Explore Our Services buttons", async ({ page }) => {
    const main = page.getByRole("main");
    await expect(main.getByRole("link", { name: /Book a Consultation/ }).first()).toBeVisible();
    await expect(main.getByRole("link", { name: /Explore Our Services/ })).toBeVisible();
  });

  // ── Sections ─────────────────────────────────────────────────────────────────
  test("services section exists with id=services", async ({ page }) => {
    const section = page.locator("#services");
    await expect(section).toBeAttached();
  });

  test("all 5 service cards are present", async ({ page }) => {
    await page.locator("#services").scrollIntoViewIfNeeded();
    for (const title of ["Cybersecurity", "Compliance", "Framework Implementation", "Training", "Advisory"]) {
      await expect(page.getByRole("heading", { name: title, exact: true })).toBeVisible();
    }
  });

  test("Global Reach section is visible", async ({ page }) => {
    await expect(page.getByText("Global reach.")).toBeVisible();
  });

  test("Engagement Process section is visible", async ({ page }) => {
    await expect(page.getByText("Assessment & Strategy")).toBeVisible();
  });

  test("Final CTA section is visible", async ({ page }) => {
    await expect(page.getByText("Ready to strengthen, secure, and scale?")).toBeVisible();
  });

  test("footer is present with brand name", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();
    await expect(footer.getByText("Punic Systems.", { exact: true })).toBeVisible();
  });

  // ── Scroll ──────────────────────────────────────────────────────────────────
  test("Explore Our Services scrolls to #services", async ({ page }) => {
    await page.getByRole("link", { name: /Explore Our Services/ }).click();
    const section = page.locator("#services");
    await expect(section).toBeInViewport({ timeout: 2000 });
  });

  // ── No horizontal overflow ──────────────────────────────────────────────────
  test("no horizontal overflow at 1440px", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);
  });

  test("no horizontal overflow at 390px", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);
  });

  // ── No console errors ────────────────────────────────────────────────────────
  test("no critical console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors.filter((e) => !e.includes("favicon"))).toHaveLength(0);
  });

  // ── Visual screenshots (no strict assertions, stored for comparison) ────────
  test("screenshot desktop 1440", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "test-results/home-1440.png", fullPage: true });
  });

  test("screenshot desktop 1280", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page.screenshot({ path: "test-results/home-1280.png", fullPage: true });
  });

  test("screenshot tablet 768", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");
    await page.screenshot({ path: "test-results/home-768.png", fullPage: true });
  });

  test("screenshot mobile 390", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.screenshot({ path: "test-results/home-390.png", fullPage: true });
  });
});
