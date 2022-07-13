let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220713.txt').toString().trim().split("\n");
let arr = [];

for(let i = 0; i < input.length; i++) {
    arr.push(+input[i])
}

let answerMax = Math.max(...arr);
let answerIndex = arr.indexOf(answerMax);
console.log(answerMax)
console.log(answerIndex + 1)