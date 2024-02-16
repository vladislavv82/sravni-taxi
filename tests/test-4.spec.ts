import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rostov-na-donu1.taximaxim.ru/zakazi-taksi-onlajn');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').click();
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').fill('Башкирская 12');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').press('ArrowDown');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').press('Enter');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Куда', { exact: true }).click();
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Куда', { exact: true }).fill('Башкирская 10');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Куда', { exact: true }).press('ArrowDown');
  await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Куда', { exact: true }).press('Enter');
});