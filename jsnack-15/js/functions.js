function rimuoviDallaCoda (array1) {
    let arrayElem = ""
    let array2 = []
    for (let i = 0; i < array1.length - 1 ; i++){
        arrayElem += array1[i]
        array2.push(arrayElem)
    }
    console.log(arrayElem);
    console.log(array2);
    return array2
}