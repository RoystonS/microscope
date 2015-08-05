Package.describe({
  name: 'roystons:errors',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'],
    'client');

  api.use(['mongo', 'minimongo', 'templating'],
    'client');

  api.export('Errors');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], 'client');

  api.use('roystons:errors', 'client');

  api.addFiles('errors-tests.js', 'client');
});
