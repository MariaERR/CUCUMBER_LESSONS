const fs = require('fs');
const path = require('path');

const baseDir = './src/Features/tas-apis';
const folderList = fs.readdirSync(baseDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const jsonFolders = JSON.stringify(folderList);
fs.writeFileSync(path.join(__dirname, 'folders.json'), jsonFolders);
