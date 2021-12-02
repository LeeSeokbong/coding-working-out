var phone_number = "01033334444";
var star = "";
for(var i = 0; i < phone_number.length - 4; i++) {
    star += "*"
}
phone_number.substring(phone_number.length - 4, phone_number.length)


console.log(star + phone_number.substring(phone_number.length - 4, phone_number.length))

