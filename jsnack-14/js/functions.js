// SOLUZIONE FACILE!
// function stampa (array) {
//     const arraySplit = (array.slice()).toString
//     return arraySplit
// }

// SOLUZIONE DIFFICLE!!!!!

function stampa (array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        for (let e = 0; e < array[i].length; e++){
            // console.log(array[i][e]);
            string += `${array[i][e]},`
            console.log(string);
        }
    } 
    return string
}