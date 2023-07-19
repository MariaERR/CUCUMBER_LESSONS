const core = require('@actions/core');
const fs = require('fs');

async function run() {
  try {
    const folderListPath = core.getInput('folder-list');
    const folders = fs.readdirSync(folderListPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    core.debug(`Available Folders: ${folders}`);

    core.setOutput('folders', JSON.stringify(folders));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
