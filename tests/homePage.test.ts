import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pageObjects/homePage'


test.beforeEach(async ({ page }) => {   
    await page.goto('https://letcode.in');
  });

test.describe('home page test', () => {
   
    test('beer button click', async ( {page} )  => {
        const homePage = new HomePage(page);
        await homePage.beerBtn();
    })
});