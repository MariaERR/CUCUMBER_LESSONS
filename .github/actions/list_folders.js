const fs = require('fs');
const path = require('path');

const folderList = './CUCUMBER_LESSONS/src/Features/tas-apis';

const folders = fs.readdirSync(folderList, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => path.join(folderList, dirent.name));

console.log(JSON.stringify(folders));
