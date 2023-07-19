
const core = require('@actions/core');

const folderNames = core.getInput('folder-names');
const folders = folderNames.split(',');

core.setOutput('selected_folders', JSON.stringify(folders));
