// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// Chiedere due parole all'utente
// Creare una funzione che controlli la lunghezza delle parole. 
// Confrontare la lunghezza delle parole 
// Se lunghezza uguale stampo entrambe
// Se lunghezze diversa stampo più lunga

const word1 = prompt("Dimmi una parola!");
const word2 = prompt("Dimmi un altra parola!");

if (wordLength(word1) === wordLength(word2)){
    console.log(word1, word2);
    document.getElementById("result").innerHTML = `${word1} + ${word2}`;
}   else if (wordLength(word1) > wordLength (word2)) {
    console.log(word1);
    document.getElementById("result").innerHTML = `${word1}`
}   else if (wordLength(word1) < wordLength (word2)) {
    console.log(word2);
    document.getElementById("result").innerHTML = `${word2}`
}