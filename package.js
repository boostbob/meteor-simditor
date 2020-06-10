Package.describe({
  name: 'boostbob:meteor-simditor',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'The simditor wrapper for meteor package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/boostbob/meteor-simditor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.2');
  api.use('ecmascript');

  api.use('webapp');
  api.use('cfs:standard-packages@0.5.10');
  api.use('cfs:ejson-file@0.1.4');
  api.use('iyyang:cfs-aliyun@0.1.2');

  api.addFiles('server/images.js', ['server']);
  api.addFiles('server/uploader.js', ['server']);

  api.addFiles('client/simditor.css', ['client']);
  api.addFiles('client/simditor.js', ['client']);
  api.addFiles('client/editor.js', ['client']);

  api.mainModule('meteor-simditor.js');
});

Npm.depends({
  'multiparty': '4.2.1',
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('random');
  api.use('meteortesting:mocha');

  api.use('boostbob:meteor-simditor');

  api.mainModule('test/simditor-tests.js');
});
