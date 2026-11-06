
// GIVEN CODE


const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
  };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
          
    //IN CLASS CODE 
// // courses.js
// const aCourse = {
//   code: "CSE121b",
//   name: "Javascript Language",
//   sections: [
//     { sectionNum: 1, 
//         roomNum: 'STC 353', 
//         enrolled: 26, 
//         days: 'TTh', 
//         instructor: 'Bro T'},
//     { sectionNum: 2, 
//         roomNum: 'STC 347', 
//         enrolled: 28, 
//         days: 'TTh', 
//         instructor: 'Sis A'}
//     ],
//     enrollStudent: function(num) {
//         // get the section that has sectionNum == num 
//         const theSection = this.sections.find(
//             (section) => section.sectionNum === num);
//         //increment enrolment 
//         console.log(theSection)
//         theSection.enrolled++;
//     },
//     dropStudent: function(num) {
//         // get the section that has sectionNum == num 
//         const theSection = this.sections.find(
//             (section) => section.sectionNum === num);
//         //increment enrolment 
//         console.log(theSection)
//         theSection.enrolled--;
//     }
// };

// aCourse.sections[0].enrolled;

// function setCourse(course){
//     // Identifys the parts/sectios that we want to edit
//     const courseName = document.querySelector("#courseName");
//     const courseCode = document.querySelector("#courseCode");

//     // tells we want to edit the text within these parts
//     courseName.textContent = course.name;
//     courseCode.textContent = course.code;
// }

// //replaces the specific parts
// function sectionsTemplate(section) {
//     return `
//     <tr>
//         <td>${section.sectionNum}</td>
//         <td>${section.roomNum}</td>
//         <td>${section.enrolled}</td>
//         <td>${section.days}</td>
//         <td>${section.instructor}</td>
//     </tr>
//     `
// };

// //apply the edits
// function setSections(sections) {
//     const sectionsEl = document.querySelector("#sections");
//     const html = sections.map(sectionsTemplate); //This becomes a list that needs to be jined together
//     sectionsEl.innerHTML = html.join(''); // gets rid of the commas because this is technically a list
// }


// // call the functions so they show up on the website
// setCourse(aCourse);
// setSections(aCourse.sections);

// function enrollHandler(ev) {
//     console.log(ev)
//     if(ev.target.id === "enrollStudent") {
        
//     }
// }

// document.querySelector("#enrollStudent").addEventListener("click", enrollHandler)
// document.querySelector("#dropStudent").addEventListener("click", enrollHandler)
