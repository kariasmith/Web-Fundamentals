function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");

var nameSpan = document.querySelector("#name");
var foodToOrder = "Pizza";

function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}

function pickFood(element) {
    console.log("The food you selected is " + element.value);
    foodToOrder = element.value;
}

function order() {
    alert("Ordering a " + foodToOrder);
}