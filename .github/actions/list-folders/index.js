const core = require('@actions/core');
const fs = require('fs');

async function run() {
  try {
    const folderList = core.getInput('folder-list').split(',');

    const folderSelection = await core.getInput('folder-selection', {
      required: false
    });

    if (!folderSelection || !folderList.includes(folderSelection)) {
      const options = folderList.map((folder) => `<option value="${folder}">${folder}</option>`);
      const selectInput = `<select id="folder-selection" name="folder-selection">${options.join('')}</select>`;
      core.setOutput('folder-selection', selectInput);
    } else {
      core.setOutput('folder-selection', folderSelection);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
