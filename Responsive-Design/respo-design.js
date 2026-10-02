

/* 
1. get the elements that we want to modify
2. figure out when the modification will occur
3. for each element 
        figure out which one it is
        output the number 

*/

function displayWelcom(){
    const headerEL = document.querySelecter("header");
    const dayIndex = new Date().getDay;
    const days = ["sunday", "Monday", "Tuesday"];
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
    
}
document.querySelector(".menu-btn").addEventListener("click", toggleMenu)

addIndex()
displayWelcom()