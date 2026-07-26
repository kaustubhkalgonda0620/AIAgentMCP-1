const { test, expect } = require('@playwright/test');

test('Udemy personal plan page opens successfully', async ({ page }) => {
  await page.goto('https://www.udemy.com/pricing/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/pricing/);
  await expect(page.locator('body')).toContainText(/pricing|personal/i, { timeout: 15000 });
});
