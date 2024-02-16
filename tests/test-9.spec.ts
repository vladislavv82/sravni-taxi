import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://city-mobil.ru/rostov-na-donu/tariffs/economy');
  await page.getByRole('button', { name: 'Заказать такси' }).nth(1).click();
  await page.getByPlaceholder('Введите адрес подачи').click();
  await page.getByPlaceholder('Введите адрес подачи').fill('Ларина 45');
  await page.getByPlaceholder('Введите адрес подачи').press('ArrowDown');
  await page.locator('div:nth-child(2) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > div > div:nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByPlaceholder('Введите адрес доставки').fill('Башкирская 12');
  await page.getByPlaceholder('Введите адрес доставки').press('ArrowDown');
  await page.getByRole('button', { name: 'car Эконом 202 ₽' }).click();
  await page.getByLabel('Эконом92₽').locator('button').first().click();
});