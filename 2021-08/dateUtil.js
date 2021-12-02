var date = [2021,8,19,12,38,49]
var text = document.querySelector("#text");

dateUtil(date, "date", "-")

function dateUtil(date, type1, type2, Type3) {
    var dateText = ""
    switch (type1) {
        case "date":
            date = date.slice(0, 3)
            date.forEach(function(date) {
                dateText += String(date) + type2
            })
            text.textContent = dateText.slice(0, -1);
            break;
        case "fullDate":
            originDate = date;
            date = originDate.slice(0, 3)
            date.forEach(function(date) {
                dateText += String(date) + type2
            })
            dateText = dateText.slice(0, -1).concat(" ");
            time = originDate.slice(3, 6)
            time.forEach(function(time) {
                dateText += String(time) + type3
            })
            text.textContent = dateText.slice(0, -1);
    }
}