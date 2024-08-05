// function sayHi(name) {
//     console.log("Hi "+ name);
// }

// sayHi(window)



// modules

// const log = require('./logger');

// log("hello");


// path module

// const path = require('path');

// const  pathObj = path.parse(__dirname);
// console.log(pathObj);


// os module


// const os = require('os');

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total memory : ${totalMemory}`);
// console.log(`Free memory : ${freeMemory}`);




// fs module
const fs = require('fs');

// synchronous method
// const files = fs.readdirSync('./');
// console.log(files);


// asynchronous method
fs.readdir('./',(error, files) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(files);
    }
});


// traditional way

fs.readdir('./',function(error, files){
    if(error){
        console.log(error);
    }
    else{
        console.log(files);
    }
});