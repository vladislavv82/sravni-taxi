import { Injectable } from '@nestjs/common';
import { firefox } from 'playwright';

@Injectable()
export class CitymobilService {
    constructor() {}

    async getPrice(from: string, to: string): Promise<any> {
        const browser = await firefox.launch();
        const page = await browser.newPage();

        try {
            await page.goto('https://city-mobil.ru/rostov-na-donu/tariffs/economy');

            while (!(await page.isVisible('button:has-text("Заказать такси")'))) {
                await page.reload();
                await page.waitForTimeout(1000);
            }

            await page.getByRole('button', { name: 'Заказать такси' }).nth(1).click();
            await page.getByPlaceholder('Введите адрес подачи').fill(from);
            await page.waitForTimeout(1000);
            await page.getByRole('listbox').first().click();
            await page.waitForTimeout(1000);
            await page.getByPlaceholder('Введите адрес доставки').fill(to);
            await page.waitForTimeout(1000);
            await page.getByRole('listbox').first().click();
            await page.waitForTimeout(3000);

            const econPrice = await page.locator('.shadows-11nzmjz-root-priceText').nth(0).textContent();
            const comfortPrice = await page.locator('.shadows-11nzmjz-root-priceText').nth(1).textContent();
            const comfortPlusPrice = await page.locator('.shadows-11nzmjz-root-priceText').nth(2).textContent();

            // Возвращаем объект с ценами за поездку для каждой категории
            return {
                econPrice: econPrice,
                comfortPrice: comfortPrice,
                comfortPlusPrice: comfortPlusPrice
            };
        } catch (error) {
            console.error('Ошибка при получении цены:', error);
            return { error: 'Ошибка при получении цены' }; // Возвращаем объект с ошибкой
        } finally {
            await page.screenshot({ path: 'screenshot.png' });
            await browser.close();
        }
    }
}
