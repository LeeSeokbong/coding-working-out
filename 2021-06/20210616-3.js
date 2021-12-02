var arr = [1,1,3,3,0,1,1];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+1]) {
        arr2.push(arr[i])
    }
}
console.log(arr2)

