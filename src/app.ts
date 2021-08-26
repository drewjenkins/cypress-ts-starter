import cypress from 'cypress';

cypress.run({
  browser: 'chrome',
  config: {
    baseUrl: 'http://www.blank.org',
    env: {},
    numTestsKeptInMemory: 1,
    watchForFileChanges: true
  }
});
