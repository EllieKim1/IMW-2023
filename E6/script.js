//interaction//

console.log("Testing to see if JS file is linked");

const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");

let interactionContainer = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function() {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen";
})

pinkCircle.addEventListener("click",function(){
    interactionContainer.style.background = "plum";
})

blueCircle.addEventListener("click" ,function(){
    interactionContainer.style.background = "lightblue";
})


/*
Loop Task
1. Select container
2. Declare message variable and assgin text
3. For Loop
*/

const loopContainer = document.getElementById("loopContainer");
const message = "hello world!";


for (let i = 0; i < 10; i++) {
    console.log("hello world!");
    const textDiv = document.createElement("div");
    textDiv.innerHTML= message;
    loopContainer.appendChild(textDiv);

}

//Condition//

const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function(){
    console.log("hovering over condition container");
    square.style.background = "green";
})

conditionContainer.addEventListener("mouseout", function(){
   // console.log("hovering over condition container");
    square.style.background = "lightsalmon";
})

//Time//

const timeContainer = document.getElementById("timeContainer");
const increaseText = document.getElementById("increaseText");

let fontSize = 16;
const interval = setInterval(() => {
    fontSize += 1;
    increaseText.style.fontSize = `${fontSize}px`; //${} is used to evaluate and embed expressions dynamically in template literals.
}, 1000);

//Input//

const inputContainer = document.getElementById("inputContainer");

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('inputText').value;
    const textLength = document.getElementById('text-length'); 

    textLength.textContent = inputValue.length; 
});


//Console

console.log("Hello, world! and This is Exersize 6.");