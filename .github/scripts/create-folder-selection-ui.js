const fs = require('fs');
const path = require('path');

// Get the folder names from the input
const folderNamesInput = process.argv[2];
const folderNames = folderNamesInput.split(',');

// Generate the folder selection UI dynamically
let html = '<html><body>';
html += '<h2>Select Folders to Execute Tests:</h2>';

folderNames.forEach((folderName) => {
  html += `<input type="checkbox" name="selectedFolders" value="${folderName}"> ${folderName}<br>`;
});

html += '</body></html>';

// Save the generated HTML to the workflow log file
const filePath = path.join(__dirname, '..', 'folder-selection.html');
fs.writeFileSync(filePath, html);

// Output the file path to be used by the next step
console.log(`::set-output name=folder-selection-path::${filePath}`);
