let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220721.txt').toString().trim().split("\n");
let num = +input[0];
let num1 = input[1].split(" ");
let num2 = +input[2]
let answer = 0;

  for (let i = 0; i < num; i++) {
    if(+num1[i] === num2) {
      answer++
    }
   }

console.log(answer)
