const fs = require('fs');
const path = require('path');

async function run() {
  try {
    const tasApisDir = './src/Features/tas-apis';
    const folders = await fs.promises.readdir(tasApisDir);
    const filteredFolders = folders.filter((folder) =>
      fs.statSync(path.join(tasApisDir, folder)).isDirectory()
    );

    console.log(filteredFolders.join(','));
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
