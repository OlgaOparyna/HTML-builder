const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

fs.rmdir(path.resolve(__dirname, 'files-copy'), (err) => {
  if (err) {
    throw err;
  }
});

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
});

fsPromises.readDir(path.join(__dirname, 'files')).then((files) => {
  files.forEach((file) => {
    const filePath = path.join(__dirname, 'files', file);
    fsPromises.copyFile(filePath, path.join(__dirname, 'files-copy', file));
  });
});
