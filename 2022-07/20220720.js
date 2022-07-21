let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220720.txt').toString().trim().split(" ");
let num = +input[0];
let answer = 1;

  for (let i = 1; i <= num; i++) {
    answer = answer * i;
   }


console.log(answer)
