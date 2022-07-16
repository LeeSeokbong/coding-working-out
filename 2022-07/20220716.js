// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = require('fs').readFileSync('20220715.txt').toString().trim().split(" ");
// let num = input[0];

let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getUTCDate();
if(month < 10) {
    month = "0" + month
}

console.log(year+"-"+month+"-"+day)
