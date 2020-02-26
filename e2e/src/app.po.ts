import { browser, by, element, WebElement, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getAppName(): Promise<string> {
    return element(by.css('app-header span')).getText() as Promise<string>;
  }

}
