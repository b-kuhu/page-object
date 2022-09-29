/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
     user_loginPage: './pages/user_login.js',
  },
  name: 'page-object-model'
}