const EventEmitter = require('events');
const emitter = new EventEmitter();

// Adding a listener
emitter.on("messageLogged", (arg) => {
    console.log("Listener called",arg)
})

// Raise an event
emitter.emit("messageLogged", {id : 1, url : "http:/"})



// exercise

const EventEmitter = require('events')

const Logger = require('./logger')
const logger = new Logger();

logger.on('logging', (data) => {
    console.log("Listener called", data);
})

logger.log('message')

