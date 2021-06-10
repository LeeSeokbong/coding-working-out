var a = [1,2,3,4];
var b = [-3,-1,0,2];
var answer = 0;

for(var i = 0; i < a.length; i++) {
    answer += a[i]*b[i]
}

console.log(answer)