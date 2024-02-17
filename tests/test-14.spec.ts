import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://taxi.yandex.ru/ru_ru/');
  await page1.getByLabel('Я не робот').click();
});