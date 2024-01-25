// setTimeout(() => {
    
// }, timeout);
// clearTimeout()

// setInterval()
// clearInterval()

//These are all global scope functions but variables donot have global scope in NODE

// Exporting a function

console.log(__filename); // outputs the current file name complete path
console.log(__dirname); // Outputs the Current Working Directory full path
function log(message){
    console.log(message)
}

module.exports.externallyAccessibleCustomName = log;
