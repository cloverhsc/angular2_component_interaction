import { MyttPage } from './app.po';

describe('mytt App', function() {
  let page: MyttPage;

  beforeEach(() => {
    page = new MyttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
