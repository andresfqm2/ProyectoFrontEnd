import { AppPage } from './app.po';
<<<<<<< HEAD
import { browser, logging } from 'protractor';
=======
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('AppStarWars app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
=======
    expect(page.getTitleText()).toEqual('Welcome to AppStarWars!');
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
  });
});
