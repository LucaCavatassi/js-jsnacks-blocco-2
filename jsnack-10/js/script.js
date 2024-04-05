// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// Faccio inserire il numero all'utente. 
// Dal numero dell'utente genero un numero uguale di array 
    // L'array ha numeri casuali da 1 a 1000
// Ogni volta che vengono creati stampa a schermo

const userNum = parseInt(prompt("Dimmi un numero!")); //NUMBER

for (let i = 0; i < userNum; i++) {
    let newArray = genereteArray ();
    console.log(newArray);
    console.log(printArray(newArray));
}