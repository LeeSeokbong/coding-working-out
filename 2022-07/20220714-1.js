let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220714.txt').toString().trim().split(" ");
let num0 = input[0];

console.log(num0.length)