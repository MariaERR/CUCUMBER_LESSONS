const fs = require('fs');

const folderList = process.env.INPUT_FOLDER_LIST;

const folders = fs.readdirSync(folderList, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

console.log('Folders:', folders.join(', '));

process.stdout.write(JSON.stringify(folders));
