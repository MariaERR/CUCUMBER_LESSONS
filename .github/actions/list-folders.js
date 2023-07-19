const fs = require('fs');

const tasApisDir = './src/Features/tas-apis';

fs.readdir(tasApisDir, (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const folders = files.filter((file) => {
    return fs.statSync(`${tasApisDir}/${file}`).isDirectory();
  });

  fs.writeFile('./.github/actions/folders.json', JSON.stringify(folders), (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Folders: ${folders}`);
    process.exit(0);
  });
});
