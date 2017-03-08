Package.describe({
  name: 'apollo',
  version: '0.5.0',
  summary: ' 🚀 Add Apollo to your Meteor app',
  git: 'https://github.com/apollostack/meteor-integration',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use(['ecmascript', 'accounts-base', 'tmeasday:check-npm-versions@0.3.1']);

  api.mainModule('main-client.js', 'client');
  api.mainModule('main-server.js', 'server');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'practicalmeteor:mocha',
    'practicalmeteor:chai',
    'http',
    'random',
    'accounts-base',
    'apollo',
  ]);

  api.mainModule('tests/client.js', 'client');
  api.mainModule('tests/server.js', 'server');
});
