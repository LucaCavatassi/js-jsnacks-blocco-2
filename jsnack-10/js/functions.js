function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function genereteArray () {
    let array = [];

    for (let i = 0; i < 10; i++ ) {
        let numberInArray = getRndInteger(1, 100);
        array.push(numberInArray);
    }

    return array;
}

function printArray (array) {
    const resultElem = document.getElementById("lista");
    console.log(resultElem);

    resultElem.innerHTML += `<li> ${newArray} </li>;`
}
