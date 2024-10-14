const {readFile, writeFile} = require('fs');
const fs = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8',(err, result) => {
        if(err) {
            console.log(err);
            return;
        }
    const second = result;

    fs.unlink('content/third.txt', (err) => {
        if(err){
            console.log("Failed to delete file", err);
        }
        else{
            console.log("File deleted successfully");
        }
    })


    writeFile('./content/result.txt',`This is the result ${first},${second}`, {flag : 'a'}, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('File created');
        })
    })
})


