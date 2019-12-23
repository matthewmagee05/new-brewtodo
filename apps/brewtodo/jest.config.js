module.exports = {
  name: 'brewtodo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/brewtodo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
