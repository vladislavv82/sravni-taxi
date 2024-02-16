import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rostov-na-donu1.taximaxim.ru/zakazi-taksi-onlajn');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').click();
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').fill('Башкирская улица, 12');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Куда', { exact: true }).click();
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Куда', { exact: true }).fill('Башкирская улица, 10');
  await page.frameLocator('iframe[name="order-form-frame"]').locator('#order-price div').first().click();
});