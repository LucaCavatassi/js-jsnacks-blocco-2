// SOLUZIONE FACILE 
// function trovaIndice (array, number) {
//     if (array.includes (number)){
//         return array.indexOf(number)
//     }else {
//         return number = -1;
//     }
// }

// SOLUZIONE DIFFICILE!!!
function trovaIndice (array, number){
    let isIn = false;
    let index;
    for (let i = 0; i < array.length; i++){
        if (array[i] === number) {  
            isIn = true
            index = i
        } 
    }

    if (isIn = true) {
        return index
    } else {
        number = -1;
    }
}