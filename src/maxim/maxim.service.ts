import { Injectable } from '@nestjs/common';
import { chromium } from 'playwright';

@Injectable()
export class MaximService {
  constructor() {}

  async getPrice(from: string, to: string): Promise<any>  {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {
    await page.goto('https://rostov-na-donu1.taximaxim.ru/zakazi-taksi-onlajn');

    const frame = page.frame({ name: 'order-form-frame' });

    // Заполнение поля "Откуда" 
    await frame.fill('input[placeholder="Откуда"]', from);
    await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').press('ArrowDown');
    await page.frameLocator('iframe[name="order-form-frame"]').getByPlaceholder('Откуда').press('Enter');
    await page.waitForTimeout(1000);

    // Заполнение поля "Куда"
    await frame.fill('input[placeholder="Куда"]', to);
    await frame.press('input[data-place-id="0"][data-quick-id="0"]', 'ArrowDown');
    await frame.press('input[data-place-id="0"][data-quick-id="0"]', 'Enter');

    // Ждем 1 секунду перед тем как получить цену
    await page.waitForTimeout(3000);

    // Получаем текст из элемента span#price
    const econPrice = await frame.textContent('span#price');
    await page.waitForTimeout(1000);

    await page.frameLocator('iframe[name="order-form-frame"]').getByRole('button', { name: ' Тариф: Легковые — Эконом' }).click();
    await page.frameLocator('iframe[name="order-form-frame"]').getByText('Комфорт Высокий уровень удобства').click();

    await page.waitForTimeout(3000);
    const comfortPrice = await frame.textContent('span#price');

    return {
      econPrice: econPrice,
      comfortPrice: comfortPrice
    };

  } catch (error) {
    console.error('Ошибка при получении цены:', error);
    return 'Ошибка при получении цены';
  } finally {
    await browser.close();
  }

  }
}
