var marquee = document.querySelector("#marquee");
var marqueeInput = document.querySelector("#marqueeInput");
var marqueeInputText = marqueeInput.value;
var marqueeText = document.createElement("div")
var text1 = document.createElement("p")
marqueeText.setAttribute("class", "marqueeText")
marqueeInput.addEventListener("keyup", function(){
    text1.textContent = "0123456789"
    marquee.append(marqueeText)
    marqueeText.append(text1)
})