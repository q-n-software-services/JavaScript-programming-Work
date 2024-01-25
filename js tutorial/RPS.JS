let redDiv = document.getElementById('red');
let yellowDiv = document.getElementById('yellow');
let greenDiv = document.getElementById('green');

// creating anonymous functions for onclick event

redDiv.onclick = () => console.log("you clicked RED button");
yellowDiv.onclick = () => console.log("you clicked YELLOW button");
greenDiv.onclick = () => console.log("you clicked GREEN button");

let squares = document.querySelectorAll('.colorSquare');// selecting elements by class name
console.log(squares);

console.log(squares[0].value);

// ForEach loop
const logs = {};

squares.forEach(square => {
    square.onclick = () => {console.log(square.value)
    if (square.value in logs) {
        logs[square.value] += 1
    } else {
        logs[square.value] = 1
    }
    console.log(logs[square.value])
    let text = document.getElementById(square.id);
    text.innerText = `${logs[square.value]}`;}
})

const clearGameButton = document.getElementById('clear-game');
clearGameButton.onclick = () => clearScores()
function clearScores() {
    squares.forEach(square => {
        logs[square.value] = null
        const temp = document.getElementById(square.id)
        temp.innerText = logs[square.value]
    })
}