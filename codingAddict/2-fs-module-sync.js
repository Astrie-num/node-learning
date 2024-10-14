// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt','utf-8');
// const second = readFileSync('./content/second.txt','utf-8');

// console.log(first, second);

// writeFileSync

// writeFileSync('./content/result.txt',`This is the result : ${first}${second}`, {flag : 'a'});



const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('content/first.txt','utf-8');
console.log(first);


const result = writeFileSync("content/result.txt", "This is the result: ${first}",{flag : 'a'});
