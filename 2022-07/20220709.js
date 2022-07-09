let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220709.txt').toString().trim().split(" ");
let num1 = +input[0];
let num = 0;

for(let i = 1; i < num1+1; i++) {
    num = num + i;
}
console.log(num)