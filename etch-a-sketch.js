let etch = document.querySelectorAll(".container");
console.log("Initial list size:", etch.length);

etch.forEach((etch, index) => {
    const newDiv = document.createElement('div');

    newDiv.id = `uniqueDivId_$[index+1}`;
    
    parentElement.appendChild(newDiv);
})





/*
etch.forEach(container => {

    const boxOne = document.createElement("div");
    const boxTwo = document.createElement("div");
    const boxThree = document.createElement("div");
    const boxFour = document.createElement("div");
})*/

