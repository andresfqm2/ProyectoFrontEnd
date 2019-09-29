<<<<<<< HEAD
// @ts-check
=======
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

<<<<<<< HEAD
/**
 * @type { import("protractor").Config }
 */
=======
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
<<<<<<< HEAD
      project: require('path').join(__dirname, './tsconfig.json')
=======
      project: require('path').join(__dirname, './tsconfig.e2e.json')
>>>>>>> eda25b8ea7734e4ddcefe4850db1b66293b8437f
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};