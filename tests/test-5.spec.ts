import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://city-mobil.ru/rostov-na-donu/tariffs/economy');
  await page.getByRole('button', { name: 'Да, верно' }).click();
  await page.goto('https://city-mobil.ru/rostov-na-donu/tariffs/economy');
  const page1Promise = page.waitForEvent('popup');
  await page.frameLocator('iframe[name="a-pstxjd9lxco1"]').getByRole('link', { name: 'Конфиденциальность' }).click();
  const page1 = await page1Promise;
});