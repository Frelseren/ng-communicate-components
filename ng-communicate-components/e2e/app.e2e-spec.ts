import { NgCommunicateComponentsPage } from './app.po';

describe('ng-communicate-components App', () => {
  let page: NgCommunicateComponentsPage;

  beforeEach(() => {
    page = new NgCommunicateComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
