import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://taxi.yandex.ru/ru_ru/');
  await page.getByPlaceholder('Откуда').click();
  await page.getByPlaceholder('Откуда').fill('Башкирская 12');
  await page.getByPlaceholder('Откуда').press('ArrowDown');
  await page.getByPlaceholder('Куда? ').fill('Ларина 45');
  const page1Promise = page.waitForEvent('popup');
  await page.getByPlaceholder('Куда? ').press('ArrowDown');
  const page1 = await page1Promise;
  await page1.getByLabel('Я не робот').click();
});