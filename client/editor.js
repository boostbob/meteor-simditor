SimditorEditor = {
  create(selector, options) {
    options = options || {};

    return new Simditor({
      textarea: $(selector),
      cleanPaste: false,
      toolbar: options.toolbar || [
        'title',
        'bold', 'italic', 'underline', 'checklist', 'strikethrough',
        'fontScale',
        'color', 'ol', 'ul',
        'blockquote',
        'code', 'table', 'link', 'image', 'hr',
        'indent', 'outdent',
        'alignment'
      ],
      upload: Object.assign({
        url: Meteor.absoluteUrl('api/upload_image'),
        params: null,
        fileKey: 'image',
        connectionCount: 3,
        leaveConfirm: '文件上传中，关闭此页面将取消上传'
      }, options.upload),
      pasteImage: true,
      mention: {
        items: options.mentions || []
      }
    });
  },
  getContent(selector) {
    return $.trim($(selector).val());
  }
};