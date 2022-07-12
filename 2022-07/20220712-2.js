let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220712.txt').toString().trim().split(" ");
let str = input[0];
let num = +input[0];
let answer = 0;
let numSum;
let numStr;
if(num < 10) {
    str = "0" + str;
}

numSum = +str[0] + +str[1]
console.log(numSum)
numStr = str;

while(numSum !== num) {
    if(+numStr < 10) {
        numStr = "0" + numStr;
    } 
    console.log(numStr)
    if(numSum < 10) {
        numSum = "0" + numSum;
    } else {
        numSum = numSum + ""
    }
    console.log(numSum)
    numStr = numStr[1] + numSum[1] //5
    console.log(numStr)
    numSum = +numStr[0] + +numStr[1];
    
    // console.log(numSum)
    numSum = +numSum
    answer++;
    if(+numStr === num) {
        break;
    }
}

console.log(answer)