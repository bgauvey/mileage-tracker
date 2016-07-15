import { ServiceTrackerPage } from './app.po';

describe('service-tracker App', function() {
  let page: ServiceTrackerPage;

  beforeEach(() => {
    page = new ServiceTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
