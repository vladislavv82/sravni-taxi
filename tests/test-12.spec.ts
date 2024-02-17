import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://taxi.yandex.ru/ru_ru/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Войти' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Почта' }).click();
  await page1.getByPlaceholder('Логин или email').click();
});