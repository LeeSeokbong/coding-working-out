var s = "oooyY";
var answer = true;
// var ss = s.toLowerCase().match(/[p]/g)
// var yy = s.toLowerCase().match(/y/g)
// console.log((ss === null ? 0 : ss.length) === (yy === null ? 0 : yy.length))

console.log(s.toLowerCase().match(/p/g).length == s.toLowerCase().match(/y/g).length)
// console.log(answer)