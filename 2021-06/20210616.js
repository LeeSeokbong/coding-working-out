var arr = [5, 9, 7, 10];
var divisor = 11;
var answer = [];

arr.forEach(function(num) {
    if(num % divisor === 0) {
        answer.push(num);
    }
})

if(!answer.length) {
    answer.push(-1)
} else {
    answer.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
      });
}
// answer.sort();

console.log(answer)

