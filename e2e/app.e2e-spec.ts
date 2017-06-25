import { ChinesPage } from './app.po';

describe('chines App', () => {
  let page: ChinesPage;

  beforeEach(() => {
    page = new ChinesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
