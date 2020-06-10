const multiparty = require('multiparty');

WebApp.connectHandlers.use('/api/upload_image', (req, res, next) => {
  if (req.method != 'POST') {
    res.end(JSON.stringify({
      success: false,
      msg: '请选择上传文件'
    }));
    return;
  }

  let form = new multiparty.Form();
  form.parse(req, Meteor.bindEnvironment((err, fields, files) => {
    let store = Images.insert(files.image[0].path);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      msg: '上传成功',
      file_path: store.ossurl()
    }));
  }));
});