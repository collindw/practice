import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  
  //readonly thingOnPage: locator
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly beer: Locator;
 
  readonly workspaceTitle: Locator;
  readonly exploreWorkspace: Locator;
  
  readonly coursesTitle: Locator;
  readonly exploreCourses: Locator;
  
  readonly groomingTitle: Locator;
  readonly testPractice: Locator;
  readonly interviewPrep: Locator;
  
  readonly productTitle: Locator;
  readonly letXpath: Locator;
  readonly footer: Locator;

  

  constructor(page: Page) {
    
    //list all page element selectors here
    //this.first = selector
    this.page = page;
    this.pageTitle = page.locator('body > app-root > app-main > section.hero.is-medium.bg > div > div > div:nth-child(1) > div > h1');
    this.beer = page.locator('body > app-root > app-main > section.hero.is-medium.bg > div > div > div:nth-child(2) > div:nth-child(1) > a');
    this.workspaceTitle = page.locator('body > app-root > app-main > section.hero.has-background-white > div > div:nth-child(1) > div.column.is-4.is-offset-1.has-margin-top-auto.has-margin-bottom-auto > div > h1');

  }


  //list all functions for homepage elements below
  async beerBtn() {
    await this.beer.click();
    await expect(this.page).toHaveURL('https://www.buymeacoffee.com/letcode');
  } 

  async pageTitleCheck() {
      await expect(this.pageTitle).toContainText('LetCode with Koushik');
  }

 

  

  //async otherFunction() {
  //do some rad shit    
  //}

}