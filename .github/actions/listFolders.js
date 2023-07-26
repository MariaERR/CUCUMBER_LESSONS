const fs = require('fs');

const folderList = './src/Features/tas-apis';

const folders = fs.readdirSync(folderList, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

console.log('Folders:', folders.join(', '));

process.stdout.write(JSON.stringify(folders));
