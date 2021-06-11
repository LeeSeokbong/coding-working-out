var s = "1234";

console.log(s.match(/[A-Z]|[a-z]/g) === null && (s.length === 4 || s.length === 6))
console.log(s.length)
console.log(s.match(/[A-Z]|[a-z]/g) === null)

