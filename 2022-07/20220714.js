let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220714.txt').toString().trim().split(" ");
let num0 = +input[0];
let num1 = +input[1];


console.log(Math.floor((num0/num1)) + "\n" + (num0%num1))