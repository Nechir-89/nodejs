const EventEmitter = require('events');
const { logEvents } = require('./logEvents');


class Emitter extends EventEmitter { }

const eventEmitter = new Emitter();

eventEmitter.on('login', msg => logEvents(msg))
eventEmitter.on('logout', msg => logEvents(msg))
eventEmitter.on('deletingUser', msg => logEvents(msg))

eventEmitter.emit('login', 'User loged in')


setTimeout(()=>{
  eventEmitter.emit('logout', 'User loged out')
}, 5000)

setTimeout(()=>{
  eventEmitter.emit('deletingUser', 'User has deleted his account!')
},10000)



// how NodeJS differs from Vanilla JS
// NodeJS runs on a server not in a browser (backend not frontend)
// the console is the terminal window not browser dev tool (console)
// console.log('Welcome to nodejs again!')
// node uses global object not window object
// console.log(global)
// CommonJS modules instead of ES6 modules
// const os = require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());


// dirname and filename are deffined in node
// console.log(__dirname);
// console.log(__filename);

// const path = require('path')
// console.log("Path module");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// const file = path.parse(__filename)
// // console.log(path.parse(__filename));
// console.log(file.base);

const p = a => console.log(a)
const math = require('./math')
p(math)








