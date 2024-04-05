function rimuoviDallaTesta (array) {
        let arrayElem = ""
        let array2 = []
        for (let i = array.length - 1; i >= 1; i--){
            arrayElem = array[i]
            array2.push(arrayElem)
        }
        console.log(arrayElem);
        console.log(array2);
        return array2
}