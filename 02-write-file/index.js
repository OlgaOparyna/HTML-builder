const fs = require('fs');
const path = require('path');
const { stdin, exit } = require('process');

const text = fs.createWriteStream(path.join(__dirname, 'text.txt'));
console.log('Hello! Write the text here:/n');

function exitFile() {
  console.log('Bye! Have a good day!/n');
  exit();
}

stdin.on('data', (data) => {
  const info = data.toString().trim();
  if (info !== 'exit') {
    text.write(data);
  } else {
    exitFile();
  }
});

process.on('SIGINT', exitFile);
