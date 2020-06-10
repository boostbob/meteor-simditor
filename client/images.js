let images = new FS.Store.OSS('images');

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