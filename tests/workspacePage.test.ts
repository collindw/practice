import { test, expect, Page } from '@playwright/test';
import { Workspace } from '../pageObjects/workspace/workspaceHome'

let page: Page;
const workspacePage = new Workspace(page);

test.beforeEach(async ({ page }) => {
    await page.goto('https://letcode.in/test');
  });

test.describe('workspace page test', () => {
   
    test('input link', async ()  => {
        await workspacePage.inputLink();
    })

    test('button link', async ()  => {
        await workspacePage.buttonLink();
    })

    test('select link', async ()  => {
        await workspacePage.selectLink();
    })

    test('alert link', async ()  => {
        await workspacePage.alertLink();
    })
});