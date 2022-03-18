
import { expect, Locator, Page } from '@playwright/test';

export class Workspace {
  
  //readonly thingOnPage: locator
  readonly page: Page;
  readonly input: Locator;
  readonly button: Locator;
  readonly select: Locator;
  readonly alert: Locator;
  

  constructor(page: Page) {
    
    //first row of workspace practice link selectors
    this.page = page;
    this.input = page.locator('body > app-root > app-test-site > section:nth-child(2) > div > div > div > div:nth-child(1) > app-menu > div > footer > a');
    this.button = page.locator('body > app-root > app-test-site > section:nth-child(2) > div > div > div > div:nth-child(2) > app-menu > div > footer > a');
    this.select = page.locator('body > app-root > app-test-site > section:nth-child(2) > div > div > div > div:nth-child(3) > app-menu > div > footer > a');
    this.alert = page.locator('body > app-root > app-test-site > section:nth-child(2) > div > div > div > div:nth-child(4) > app-menu > div > footer > a');
  }


  //first row of workspace practice link clicks
  
  //each function below will click on links for the workspace page, then check the resulting url after click
  async inputLink() {
    await this.input.click();
    await expect(this.page).toHaveURL('https://letcode.in/edit');
  } 

  async buttonLink() {
    await this.button.click();
    await expect(this.page).toHaveURL('https://letcode.in/buttons');
  }

  async selectLink() {
    await this.select.click();
    await expect(this.page).toHaveURL('https://letcode.in/dropdowns');
  }

  async alertLink() {
    await this.alert.click();
    await expect(this.page).toHaveURL('https://letcode.in/alert');
    
  }



  

  //async otherFunction() {
  //do some rad shit    
  //}

}