let outputOne = document.getElementById("one1") 
let outputTwo = document.getElementById("two2")
let outputContent = document.getElementById("message")

outputContent.addEventListener("keyup", function (event) {
    outputOne.innerHTML = event.target.value
})

outputContent.addEventListener("keyup", function (eventTwo) {
    outputTwo.innerHTML = eventTwo.target.value
})
