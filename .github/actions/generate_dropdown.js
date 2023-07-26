const fs = require('fs');
const path = require('path');

const folderList = path.join(__dirname, '..', '..', 'folders_list.json');
const folders = require(folderList).folders;

const options = folders.map((folder) => ({ "value": folder, "label": folder }));

fs.writeFileSync('./options.json', JSON.stringify(options));

