console.log("Running main.js")

function logout(element) {
    element.innerText = "Logout";
}

function hide(element) {
    element.remove();
}

function increase(element) {
    element.innerText = parseInt(element.innerText) + 1;
    
}

