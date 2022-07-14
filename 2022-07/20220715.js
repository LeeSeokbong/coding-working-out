let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220715.txt').toString().trim().split(" ");
let num = input[0];

console.log(num.charCodeAt())