import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://city-mobil.ru/rostov-na-donu/tariffs/economy');
  await page.getByRole('button', { name: 'Да, верно' }).click();
  await page.getByRole('button', { name: 'Заказать такси' }).nth(1).click();
  await page.getByPlaceholder('Введите адрес подачи').click();
  await page.getByPlaceholder('Введите адрес подачи').fill('Ларина 45');
  await page.getByText('улица Ларина 45').first().click();
  await page.getByPlaceholder('Введите адрес доставки').click();
  await page.getByPlaceholder('Введите адрес доставки').fill('Башкирская 12');
  await page.getByPlaceholder('Введите адрес доставки').press('ArrowDown');
  await page.getByPlaceholder('Введите адрес доставки').fill('Башкирская 12');
  await page.getByPlaceholder('Введите адрес доставки').press('ArrowDown');
  await page.getByPlaceholder('Введите адрес доставки').press('ArrowRight');
  await page.getByPlaceholder('Введите адрес доставки').press('ArrowRight');
  await page.getByPlaceholder('Введите адрес доставки').press('ArrowLeft');
  await page.getByPlaceholder('Введите адрес доставки').press('ArrowRight');
});