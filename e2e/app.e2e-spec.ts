import { BugAotBuildPage } from './app.po';

describe('bug-aot-build App', () => {
  let page: BugAotBuildPage;

  beforeEach(() => {
    page = new BugAotBuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
