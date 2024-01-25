name12 = prompt("Enter your name: ");
console.log('name12' + '\n' + 'name12');

/* this is how you write a multiline comment in 
javascript and put stuff in */

// 5 % 2 this is the mod or remainder operator

// Math.ceil() rounds off the number to the upper nearest integer
// Math.floor() rounds off the number to the lower nearest integer
//Math.random() returns a random number between 0 and 1, you can multiply it by 12 to get numbers between 0 and 12

let weather = 'rain';
if (weather == 'rain'){
    console.log("Grab your umbrella ")
} else if (weather == 'sunny') {
    console.log("Grab your sunglasses")
} else { console.log("Do whatever you want")}

// == , != etc comparison operators to compare value of the variables
// ===, !== etc comparison operators to compare value of the variables as well compare their data type

greet = `hi ${name12} nice to meet you` // Template literals, same as Fstring in python

console.log(greet)

// Arrow functions
// explicit return
const sum1 = (a,b) => {
    return a + b
}

// implicit return
const sum2 = (a,b) => a + b

// return {yourVariable} this way we can return the result as a dict/object where name of the variable is key and its value is the value of object

// For loop
for (let i=0; i < 12 /* we can type i < myArray.length */; i++){
    console.log(i)
}

let fruits = ['a', 'b', 'c'] ;

// ES6 For loop
for (const fruit of fruits){
    console.log(fruit)
}

// in oprator same as python
// ++, --, += etc same as c and python

 // split(' ') and join method for strings and array is same as in python

 // map loops onto and returns an array
 const result = [1, 2, 3, 4].map(number => number * 2);// we can also add a multiline ftn for mapping action
 console.log(result)


// filter loops onto and returns an array
const result2 = [1, 2, 3, 4].map(number => number > 2/*condition to be met*/);  
console.log(result);

// conditionals: || is for OR, && is for AND

// this.innerHTML = '<h1>Muhammad Mohib 121212 9212 786</h1>';
document.getElementById("demo").innerHTML = 'Muhammad Mohib 121212 9212 786';
// JSON.stringify() -> converts a javascript data to json string

// reduce method for array
const nums = [1, 2, 3, 4];
const result12 = nums.reduce((prev, curr) => prev + curr/*, then the starting value for the accumulator*/); // works as an accumulator


index.innerHTML = '<h1>Mohib</h1>';

let text = document.getElementById('demo');
console.log(text.innerText);
text.innerText = 'I am Mohib'; // changes the HTML element text
text.innerHTML = '<p>I am Mohib</p>'; // changes the HTML element's inner HTML code

text.style.color = 'red';
 // for input from line edit etc we get its value as: myVariable.value

 // for number inputs/outputs, we can use .toFixed(number of required decimal places) to make it shorter upto req num of decimal places
 // .toLocaleString('en-US') converts a number to the currency look for the given country e.g adds commas

 // throw ' your message here' -> gives an error in console for an action which triggers it




