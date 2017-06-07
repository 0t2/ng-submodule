import { NgSubmodulePage } from './app.po';

describe('ng-submodule App', () => {
  let page: NgSubmodulePage;

  beforeEach(() => {
    page = new NgSubmodulePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
