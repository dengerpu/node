const EventEmitter = require('events')

const events = new EventEmitter()

events.on("play", (data) => {
    console.log("play事件", data)
})

events.on("run", (data) => {
    console.log("run事件", data)
})

events.emit('play', 1111)
events.emit('run', 2222)