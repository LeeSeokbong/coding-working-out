var s = "try hello world";
var arr = s.split(" ");

arr.forEach(function(str) {
    for(var i = 0; i < str.length; i++) {
        if(str.length % 2 === 1) {
            console.log(str)
            str[i] = str[i].toUpperCase()
        }
    }
})

console.log(arr)