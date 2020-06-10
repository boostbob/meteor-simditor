The [simditor](https://simditor.tower.im) wrapper for meteor package.

# addtional feature

- include aliyun oss uploader

# dependencies

- [iyyang:cfs-aliyun](https://atmospherejs.com/iyyang/cfs-aliyun)

# setup

the editor will load oss-config from [meteor settings](https://docs.meteor.com/api/core.html#Meteor-settings):

- region
- bucket
- accessKeyId
- secretAccessKey

meteor add boostbob:meteor-simditor

```js
// create
Template.some.onRendered(function() {
  let instance = this;
  let options = {
    // customize toolbar
    toolbar: [ ... ], // optional, ref simditor doc
    // customize upload
    upload: { ... }, // optional, ref simditor doc
  };
  instance.editor1 = SimditorEditor.create('#selector1', options);
  instance.editor2 = SimditorEditor.create('#selector2', options);
});

// get
SimditorEditor.getContent('#selector1');
SimditorEditor.getContent('#selector2');

// clear
instance.editor1.setValue('');
instance.editor2.setValue('');
```

# license

MIT
