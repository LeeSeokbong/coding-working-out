let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220708.txt').toString().trim().split(" ");
let num1 = +input[0];

for(let i = 1; i < 10; i++) {
    console.log(num1 + " * " + i + " = " + num1*i)
}