var n = 5;
var answer = [];
var result = "";
var arr1 = [9, 20, 28, 18, 11];
var arr2 = [30, 1, 21, 17, 28];
for(var i = 0; i < n; i ++) {
    for(var j = 0; j <arr1.length; j++){
        if(arr1[i].toString(2).padStart(n, 0).charAt(j) === "1" || arr2[i].toString(2).padStart(n, 0).charAt(j) === "1") {
            result += "#"
        } else {
            result += " "
        }
    }
}
for(var k = 0; k < n; k++) {
    answer.push(result.substring(0,n))
    result = result.substring(n)
}
console.log(answer)