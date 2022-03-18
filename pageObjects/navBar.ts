
import { expect, Locator, Page } from '@playwright/test';

export class NavBar {
  
  //readonly thingOnPage: locator
  readonly page: Page;
  readonly homeButton: Locator
  readonly workspace: Locator
  readonly courses: Locator
  readonly product: Locator
  readonly youtube: Locator
  readonly signUp: Locator
  readonly login: Locator
  

  constructor(page: Page) {
    
    //this.first = selector
    this.page = page;
    this.homeButton = page.locator('body > app-root > app-header > nav > div > div.navbar-brand > a.navbar-item > img');
    this.workspace = page.locator('#testing');
    this.courses = page.locator('#navbar-menu > div.navbar-start > a:nth-child(2)');
    this.product = page.locator('#navbar-menu > div.navbar-start > a:nth-child(3)');
    this.youtube = page.locator('text=Work SpaceCoursesProduct >> a').nth(4);
    this.signUp = page.locator('#navbar-menu > div.navbar-end > div > div > a:nth-child(1)');
    this.login = page.locator('#navbar-menu > div.navbar-end > div > div > a:nth-child(2)')
  }

  async youtubeBtn() {
    await this.youtube.click();
  } 

  async logoBtn() {
    await this.homeButton.click();
  }

  async workspaceBtn() {
    await this.workspace.click();
  }

  async coursesBtn() {
    await this.courses.click();
  }

  async productBtn() {
    await this.product.click();
  }

  async signUpBtn() {
    await this.signUp.click();
  }

  async loginBtn() {
    await this.login.click();
  }

  

  //async otherFunction() {
  //do some rad shit    
  //}

}