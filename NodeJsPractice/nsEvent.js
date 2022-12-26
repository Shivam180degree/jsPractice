const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', ()=> {
    console.log("Please turn off the motor");
    setTimeout(()=> {
        console.log("Gentle Reminder !!! Please Turn off the motor");
    },3000);
})

console.log("Script is running");
myEmitter.emit('WaterFull');