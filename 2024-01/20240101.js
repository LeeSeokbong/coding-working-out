// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20240101.txt').toString().trim().split('\n');

const targetCost = Number(input[0]);
const targetList = input.slice(2);
let totalCost = 0;


for (let i = 0; i < targetList.length; i++) {
    const [cost, count] = targetList[i].split(" ").map((x) => Number(x))
    totalCost += cost * count
}

if(totalCost === targetCost) {
    console.log("Yes")
} else {
    console.log("No")
}


//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.