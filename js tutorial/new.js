// Comment here
alert("Hi How are you");
console.log("Hello World");

let name = "Muhammad Mohib"; // string
var age = 21; //Number
const NAME = true; // Boolean
let figure = undefined; // undefined is also a data type here and all non-initialized variables are in this data-type
let selectedColor = null; // null is also a data type mostly used to emptify the variables

console.log(typeof selectedColor);

let person = {
    name1: "Muhammad Mohib",
    // method inside an object
    multiplier: function () {
        return this.name1 + this.name1
    }
}; // objects in Javascript

// person.name1 calling a propery
// person.name1() calling a method

person.name1 = "Hassaan"; // dot notation

// adding a property
person.phone = 12129212
person['email'] = 'mohib@gmail.com'


let selection = "name1";
person[selection] = "Hassaan"; // bracket notation for objects

let selectedColors2 = []; // an empty array same as python list, also an OOP literal so a dot notation works here
selectedColors2[0] = 'MUHAMMAD Mohib'; // appending the array
selectedColors2.push("Ahmad"); // appending the array
selectedColors2.slice(0, 2); // array slicing, includes first arg index value and leaves 2nd arg index value
selectedColors2.indexOf("Ahmad"); // returns index of this value
selectedColors2.length; // returns length of the array

function greet(name12){
    // body of function
    console.log("Hello " + name12)
    return 12
}


function square(number){
    // body of function
    a = number * number
    return a
}

greet('Mohib');// calling the function

 let abc = square(12);

