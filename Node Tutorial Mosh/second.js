// const app = require('./app');
// app.externallyAccessibleCustomName("My Name is Muhammad Mohib")

//following function gets you RAM currently available out of total RAM
/*const os = require("os");

let pcmem = os.totalmem();
let leftmem = os.freemem();

console.log((leftmem/(1024*1024*1024)), ' / ',(pcmem/(1024*1024*1024)));*/
//os.uptime() tells you the time for which since machine is ON

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register an emitter
emitter.on('messagelogged', function(arg){
    console.log('listener called', arg);
})

//Raise Event



class Logger extends EventEmitter /*This part is only used for inheritance*/ { // class Syntax
    log(message){ // method syntax, w/o any keyword
        console.log(message);
        this.emit('messagelogged', {'id': 1/*id*/, 'url': 'http://'/*as additional argument*/});

    }
}

const logger = new Logger();
logger.on('messagelogged', (arg) =>{
    console.log("Listener called")
})