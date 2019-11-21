var quotes = [
    "Either you run the day or the day runs you!",
    "Strength is Weakness",
    "Feel the code",
    "May the source be with you",
    "DCI, everything is possible ;)",
    "Whether you think you or you think you can’t, you’re right",
    "Aim for failure and you always succeed",
    "I give you a offer that you can not refuse"]

var btn = document.querySelector(".btn")
var quoteBox = document.querySelector(".quoteBox")

btn.addEventListener("click",generateMe)

function generateMe(){
    var qLenght = quotes.length
    var randomQuote = Math.round(Math.random() * (qLenght -1))

   return quoteBox.textContent = quotes[randomQuote] 
}
