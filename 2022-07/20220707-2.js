let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220707.txt').toString().trim().split(" ");
let num1 = +input[0];

if((num1%4 === 0 && num1%100 !== 0) || num1%400 === 0) {
    console.log(1)
} else {
    console.log(0)
}