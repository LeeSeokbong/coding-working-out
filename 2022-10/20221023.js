let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('20221023.txt').toString().trim().split('\n');
let num1 = "0b" +  input[0];

let num2 = (BigInt(num1) * 17n).toString(2);
console.log(num2)