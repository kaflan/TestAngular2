import { AngularCLITestPage } from './app.po';

describe('angular-clitest App', () => {
  let page: AngularCLITestPage;

  beforeEach(() => {
    page = new AngularCLITestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
