// PONDER ASSIGNMENT
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
          
          



// IN CLASS
// Activity 1
//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
  //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML =  stepsHtml.join(""); // set the innerHTML

// Activity 2
const grades = ["A", "B", "C"];

function convertToPoints(grade) {
    const cleanGrade = grade.toUpperCase()
    switch(cleanGrade) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        default:
            return 'Not a valid';
    }
}
const gpaPoints = grades.map(convertToPoints);
console.log(gpaPoints);


//Activity 4
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

function testLength(item) {
    if(item.length < 6){
        return true;
    }
    else return false;
    // return item.length < 6 ? true : false;
}

const shortFruit = fruit.filter(testLength)

