const core = require('@actions/core');

async function run() {
  try {
    const folderName = core.getInput('folder-name');
    const folders = folderName.split(',');

    core.debug(`Selected Folders: ${folders}`);

    core.setOutput('folders', JSON.stringify(folders));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
