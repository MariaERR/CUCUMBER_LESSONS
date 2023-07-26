const fs = require('fs');
const path = require('path');

const folderListPath = path.join(process.env.GITHUB_WORKSPACE, 'folders_list.json');
const folders = require(folderListPath).folders;

const options = folders.map((folder) => ({ "value": folder, "label": folder }));

fs.writeFileSync('./options.json', JSON.stringify(options));
