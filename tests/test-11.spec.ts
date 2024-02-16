import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rostov-na-donu1.taximaxim.ru/zakazi-taksi-onlajn');
  await page.frameLocator('iframe[name="order-form-frame"]').getByRole('button', { name: ' Тариф: Легковые — Эконом' }).click();
  await page.frameLocator('iframe[name="order-form-frame"]').getByText('Комфорт Высокий уровень удобства').click();
});