const fs = require('fs');


// synchronous method
const files = fs.readdirSync('./');
console.log(files);



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

