const p = a => console.log(a);

const directoryPath = __dirname;
const filePath = __filename;

p(`Directory address: ${directoryPath}`);
p(`File address: ${filePath}`);

const path = require('path');
const file = path.parse(filePath)
p(file)
// p(path.dirname(filePath));
// p(path.extname(filePath));
// p(path.basename(filePath));
// p(path.parse(filePath));
// p(path)
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// // console.log(path.name(__filename));

// const file = path.parse(__filename)
// console.log(file.name);


// const os = require('os');
// p(os.type());
// p(os.version());
// p(os.homedir());
// p(os.platform());

// console.log(process.platform);



