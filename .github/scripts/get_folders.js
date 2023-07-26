// scripts/get_folders.js
async function getFolders() {
  const response = await fetch('https://api.github.com/repos/MariaERR/CUCUMBER_LESSONS/contents/src/Features/tas-apis');
  const data = await response.json();
  
  const folders = data.filter(item => item.type === 'dir').map(item => item.name);
  return folders.join('\n');
}

console.log(await getFolders());
