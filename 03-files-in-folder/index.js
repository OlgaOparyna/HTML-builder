const fs = require('fs');
const path = require('path');

let promise = fs.promises.readdir(path.join(__dirname, 'secret-folder'), {
  withFileTypes: true,
});
promise.then((data) => {
  for (let elem of data) {
    const elemPath = path.join(__dirname, 'secret-folder', elem.name);
    const elemName = path.basename(elemPath).split('.')[0];
    const elemExt = path.extname(elemPath).split('.').join('');
    fs.promises.stat(elemPath).then((data) => {
      if (data.isFile()) {
        let size = (data.size / 1024).toFixed(3);
        console.log(`${elemName}-${elemExt}-${size}kb`);
      }
    });
  }
});
