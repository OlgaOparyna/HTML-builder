const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

fs.createWriteStream(path.join(__dirname, 'project-dist/bundle.css'));
