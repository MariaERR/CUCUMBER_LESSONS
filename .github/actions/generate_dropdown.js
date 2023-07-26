const fs = require('fs');

const folderList = './folders_list.json';
const folders = require(folderList).folders;

const options = folders.map((folder) => ({ label: folder, value: folder }));

console.log(JSON.stringify(options));
