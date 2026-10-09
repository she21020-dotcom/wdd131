console.log("Hello World");



// function type 1(regular function)
function double(num) {
    return num * 2;
}
// function type 2(declared function)
const douple2 = function(num) {
    return num * 3;
}
// function type 3(arrow function)
const double3 = (num) => {return num *2 }



function modifyList(list, callback) {
    list.foreach(callback);
}

modifyList([1, 2, 3], function(num) {return num * 2});