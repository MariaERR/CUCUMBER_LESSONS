document.addEventListener('DOMContentLoaded', function () {
  const folderNamesInput = document.querySelector('#input_folder-names');

  if (folderNamesInput) {
    fetch('/repos/:owner/:repo/git/trees/main?recursive=1')
      .then((response) => response.json())
      .then((data) => {
        const folders = getFolders(data.tree);

        folders.forEach((folder) => {
          const folderName = folder.join('/');
          const label = document.createElement('label');
          label.innerHTML = `<input type="checkbox" name="selected-folders" value="${folderName}"> ${folderName}<br>`;
          folderNamesInput.parentNode.insertBefore(label, folderNamesInput.nextSibling);
        });
      });
  }
});

function getFolders(tree) {
  const folders = [];
  const folderSet = new Set();

  tree.forEach((item) => {
    if (item.type === 'blob') {
      const parts = item.path.split('/');
      parts.pop(); // Remove the filename
      let folder = [];
      parts.forEach((part) => {
        folder.push(part);
        const folderPath = folder.join('/');
        if (!folderSet.has(folderPath)) {
          folders.push(folder.slice());
          folderSet.add(folderPath);
        }
      });
    }
  });

  return folders;
}
