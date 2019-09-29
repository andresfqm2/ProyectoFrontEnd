import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
<<<<<<< HEAD
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
=======
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
  }
}
