

/* 
1. get the elements that we want to modify
2. figure out when the modification will occur
3. for each element 
        figure out which one it is
        output the number 

*/

function displayWelcome(){
    const headerEL = document.querySelector("header");
    const dayIndex = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const message = `Happy ${days[dayIndex]}`;
    const messageEl = document.createElement("p");
    messageEl.textContent = message;
    headerEL.append(messageEl);
}


function renderNumber(element, index) {
    const number = document.createElement("span");
    number.textContent = index + 1;
    element.prepend(number);
        
}

//identifyies the element/scripture and stores it in a variable
function addIndex() {
    const scriptureElements = document.querySelectorAll(".scripture");
    scriptureElements.forEach(renderNumber);
}

function toggleMenu() {
    navEl.classList.toggle("hide")
    menuButton.classList.toggle("change")
}
addIndex()
displayWelcome()


const menuButton = document.querySelector(".menu-btn");
const navEl = document.querySelector(".main-nav")

menuButton.addEventListener("click", toggleMenu);