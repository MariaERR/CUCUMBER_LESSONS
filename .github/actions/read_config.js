const fs = require('fs');

try {
  // Read the JSON file
  const data = fs.readFileSync('.github/actions/folders_config.json', 'utf8');
  const config = JSON.parse(data);

  // Access the folders array
  const folders = config.folders;

  // Process the folders array or extract other data as needed
  // For this example, we'll just print the selected folders
  const selectedFolders = folders.filter((folder) => folder.selected).map((folder) => folder.name);
  console.log(selectedFolders.join(','));

} catch (err) {
  console.error('Error reading or parsing the JSON file:', err);
  process.exit(1);
}
