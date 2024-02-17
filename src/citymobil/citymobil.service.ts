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

            // Пока кнопка "Заказать такси" не появится, перезагружаем страницу
            while (!(await page.isVisible('button:has-text("Заказать такси")'))) {
                await page.reload();
                await page.waitForTimeout(1000); // Ожидание 1 секунду после перезагрузки
            }

            // Клик по кнопке "Заказать такси"
            await page.getByRole('button', { name: 'Заказать такси' }).nth(1).click();
            
            // Заполнение поля "Введите адрес подачи"
            await page.getByPlaceholder('Введите адрес подачи').fill(from);
            // Фокусировка на выпадающем списке
            await page.getByRole('listbox').focus();
            // Нажатие клавиши "вниз" для выбора первого элемента
            await page.keyboard.press('ArrowDown');
            // Нажатие клавиши "Enter" для подтверждения выбора первого элемента
            await page.keyboard.press('Enter'); 
            await page.waitForTimeout(1000);

            // Заполнение поля "Введите адрес доставки"
            await page.getByPlaceholder('Введите адрес доставки').fill(to);
            await page.waitForTimeout(1500);
            await page.getByRole('listbox').focus();
            // Нажатие клавиши "вниз" для выбора первого элемента
            await page.keyboard.press('ArrowDown');
            // Нажатие клавиши "Enter" для подтверждения выбора первого элемента
            await page.keyboard.press('Enter');
            // Ждем некоторое время, чтобы цены успели обновиться
            await page.waitForTimeout(4000);

            // Получаем тексты с ценами для каждой категории
            const econPrice = await page.locator('.shadows-11nzmjz-root-priceText').nth(0).textContent();
            const comfortPrice = await page.locator('.shadows-11nzmjz-root-priceText').nth(1).textContent();
            const comfortPlusPrice = await page.locator('.shadows-11nzmjz-root-priceText').nth(2).textContent();

            return {
                econPrice,
                comfortPrice,
                comfortPlusPrice
            };
        } catch (error) {
            console.error('Ошибка при получении цены:', error);
            return { error: 'Ошибка при получении цены' };
        } finally {
            await browser.close();
        }
    }
}
