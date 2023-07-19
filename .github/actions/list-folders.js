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

  fs.writeFileSync('./.github/actions/folders.json', JSON.stringify(folders));
});
