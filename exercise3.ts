const sumOfAllArrayElements = (array) => {
    if(array.length===0){
        return 0
    }
    const firstElement = array[0];
    const entireArray = array.slice(1)
    return firstElement + sumOfAllArrayElements(entireArray)
}

console.log(sumOfAllArrayElements([1,1,1]))