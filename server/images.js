let images = new FS.Store.OSS('images', {
  region: Meteor.settings.region || 'oss-cn-hangzhou',
  aliyunInternal: false,
  bucket: Meteor.settings.bucket || 'bucket',
  accessKeyId: Meteor.settings.accessKeyId || 'accessKeyId',
  secretAccessKey: Meteor.settings.secretAccessKey || 'secretAccessKey'
});

Images = new FS.Collection('images', {
  stores: [images],
  filter: {
    allow: {
      maxSize: 1 * 1024 * 1024,
      contentTypes: ['image/*'],
      extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG']
    }
  }
});

Images.allow({
  insert: (userId, fileObj) => !!userId,
  update: (userId, fileObj) => !!userId,
  // download: (userId, fileObj) => !!userId,
  download: (userId, fileObj) => true,
  remove: (userId, fileObj) => !!userId
});

FS.File.prototype.ossurl = function() {
  let record = this.getFileRecord();
  if (!record) return;
  let key = `${this.collectionName}/${this._id}-${record.name()}`;
  return '//' + Meteor.settings.bucket + '.' + Meteor.settings.region + '.aliyuncs.com/' + key;
};