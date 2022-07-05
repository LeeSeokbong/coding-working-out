// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220704.txt').toString().trim().split(" ");
// let a = input[0] + "??!";
let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);
// console.log(a);
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C);


//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.