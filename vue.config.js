const glob = require('glob');
function creatEntry() {
  let entryObj = {};
  glob.sync('./src/**/index.html').forEach(val => {
    let url = val.split('/')[2];
    entryObj[url] = {
      entry: `src/${url}/main.js`,
      template: `src/${url}/index.html`,
      filename: `${url}.html`,
    }
  });
  return entryObj;
}

module.exports = {
  pages: creatEntry()
}