var s = "abcde";
var answer = [];
if(s.length%2 === 0) {
    console.log(s.slice(s.length/2-1, s.length/2+1))
}

if(s.length%2 !== 0) {
    console.log(s.slice(s.length/2, s.length/2+1))
}

console.log(answer)