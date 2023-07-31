console.log("Running main.js");

// Both of these will select the h1 tag
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");

var logoImg = document.querySelector(".nav img");

var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement);

function add() {
    count++;
    countElement.innerText = "The count is " + count;
    console.log(count);
}

function subtract() {
    count--;
    countElement.innerText = "The count is " + count;
    console.log(count);
}

var h3 = document.querySelector("h3");
h3.innerText = "New Title";

var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "dog.jpg";  
}
//console.log(element.style);
//element.style.backgroundColor = "goldenrod";
//element.remove();
// this & element are referring to the actual button itself.

function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}
function setActive(element) {
    element.classList.add("dark-mode");
}
function setActive(element) {
    if(element.classList.includes("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}
