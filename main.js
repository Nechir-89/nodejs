const EventEmitter = require('events')
const { logEvents } = require('./logEvents')



class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('log', msg => logEvents(msg))

setTimeout(() => {
  myEmitter.emit('log', 'Log event number 1')
}, 1000)

setTimeout(() => {
  myEmitter.emit('log', 'Log event number 2')
}, 1000)