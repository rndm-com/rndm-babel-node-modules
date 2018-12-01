const fs = require('fs');
const path = require('path');

const register = (whitelist) => {
  const babel = path.join(process.cwd(), '.babelrc');
  const contents = fs.existsSync(babel) ? fs.readFileSync(babel) : '{}';
  const opts = JSON.parse(contents);
  const ignoreFiles = (filename) => (whitelist.reduce((o, i) => (o && !filename.match(`/${i}/`)), !!filename.match('/node_modules/')));
  const options = {
    ignore: [
      ignoreFiles,
    ],
  };
  require('@babel/register')(Object.assign({}, opts, options));
};

module.exports = register;
