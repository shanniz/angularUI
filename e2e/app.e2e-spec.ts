import { AngularuiPage } from './app.po';

describe('angularui App', function() {
  let page: AngularuiPage;

  beforeEach(() => {
    page = new AngularuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
