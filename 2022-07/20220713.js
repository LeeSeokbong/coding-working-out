let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220713.txt').toString().trim().split("\n");
let str = input[1];
let arr = [];
arr.push(str.split(" "))

let answerMax = Math.min(...arr[0]);
let answerMin = Math.max(...arr[0]);

console.log(answerMax + " " + answerMin)