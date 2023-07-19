const fs = require('fs');
const path = require('path');

const tasApisDir = './src/Features/tas-apis';

fs.readdir(tasApisDir, (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const folders = files.filter((file) => {
    return fs.statSync(path.join(tasApisDir, file)).isDirectory();
  });

  console.log(folders.join('\n'));
  process.exit(0);
});
