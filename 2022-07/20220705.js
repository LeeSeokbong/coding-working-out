let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220705.txt').toString().trim().split("\n");
let num1 = input[0];
let num2 = input[1];
let strNum2 = String(input[1])
let num2Array = Array.from(strNum2).reverse();

// let b = parseInt(input[1]);
for(let i = 0; i < num2Array.length; i++){
    console.log(num1*num2Array[i]);
}

console.log(num1*num2);
// console.log(num1*num2[2]);
// console.log(num1*num2[1]);
// console.log(num1*num2[0]);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// console.log(a1);
// let a1 = 2;

// console.log(a2);
// const a2;


console.log('|\\_/|')
console.log('|q p|   /}')
console.log('( 0 )""\"\\')
console.log('|"^"`    |')
console.log('||_/=\\\\__|')

console.log('\\    /\\')
console.log(' )  ( \')')
console.log('(  /  )')
console.log(' \(__)|')

console.log('         ,r\'"7')
console.log('r`-_   ,\'  ,/')
console.log(' \\. ". L_r\'')
console.log('   `~\\/')
console.log('      |')
console.log('      |')






//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// let a = parseInt(input[0] + "??!");