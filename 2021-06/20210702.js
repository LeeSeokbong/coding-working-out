var a = 3;
var b = 5;
var c = b - a + 1;
var answer = 0;

if(a > b) {
    var c = a - b + 1    
} else {
    var c = b - a + 1
}

for(var i = 0; i < c; i++) {
    answer = answer + a
    a++
}

console.log(answer)

