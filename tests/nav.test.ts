import { test, expect, Page } from '@playwright/test';
import { NavBar } from '../pageObjects/navBar'

test.beforeEach(async ({ page }) => {
  await page.goto('https://letcode.in/signup');
});

test.describe('navbar clicks', () => {
    

    test('youtube button click', async ( {page})  => {
        const navbar = new NavBar(page);
        await navbar.youtubeBtn();
    })

    test('logo button click', async ( {page})  => {
        const navbar = new NavBar(page);
        await navbar.logoBtn();
    })

    test('workspace button click', async ( {page})  => {
        const navbar = new NavBar(page);
        await navbar.workspaceBtn();
    })

    test('courses button click', async ( {page})  => {
        const navbar = new NavBar(page);
        await navbar.coursesBtn();
    })

    test('products click', async ( {page})  => {
        const navbar = new NavBar(page);
        await navbar.productBtn();
    })
    
    test('signUp click', async ( {page})  => {
        const navbar = new NavBar(page);
        await navbar.productBtn();
    })

    test('login click', async ( {page})  => {
        const navbar = new NavBar(page);
        await navbar.productBtn();
    })
});
    