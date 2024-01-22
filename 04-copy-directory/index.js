const fs = require('fs');
const path = require('path');

fs.rmdir(path.resolve(__dirname, 'files-copy'), (err) => {
  if (err) {
    throw err;
  }
});

fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
});

fs.promises.readDir(path.join(__dirname, 'files')).then((files) => {
  files.forEach((file) => {
    const filePath = path.join(__dirname, 'files', file);
    fs.promises.copyFile(filePath, path.join(__dirname, 'files-copy', file));
  });
});
