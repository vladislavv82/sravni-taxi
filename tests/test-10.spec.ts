import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://city-mobil.ru/rostov-na-donu/tariffs/economy');
  await page.locator('p').filter({ hasText: 'Ростов-на-Дону' }).click();
  await page.locator('#id-modal').getByRole('button').click();
  await page.goto('https://city-mobil.ru/rostov-na-donu/tariffs/economy');
  await page.getByRole('button', { name: 'Заказать такси' }).nth(1).click();
  await page.getByPlaceholder('Введите адрес подачи').click();
  await page.getByPlaceholder('Введите адрес подачи').fill('Ларина');
  await page.getByRole('listbox').first().click();
});