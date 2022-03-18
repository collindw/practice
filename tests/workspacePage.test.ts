import { test, expect, Page } from '@playwright/test';
import { Workspace } from '../pageObjects/workspace/workspaceHome'


test.beforeEach(async ({ page }) => {
    await page.goto('https://letcode.in/test');
  });

test.describe('workspace page test', () => {
   
    test('input link', async ( {page} )  => {
        const workspacePage = new Workspace(page);
        await workspacePage.inputLink();
    })

    test('button link', async ( {page} )  => {
        const workspacePage = new Workspace(page);
        await workspacePage.buttonLink();
    })

    test('select link', async ( {page} )  => {
        const workspacePage = new Workspace(page);
        await workspacePage.selectLink();
    })

    test('alert link', async ( {page} )  => {
        const workspacePage = new Workspace(page);
        await workspacePage.alertLink();
    })
});