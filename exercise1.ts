const checkLevelOfNestingOfArray = (array)=>{
    let levelsOfNestedArrayCount = 0;
    const arrayOfNumbers = array.map(element => {
        if(typeof element === "object" && element.length){
            levelsOfNestedArrayCount+=1
            if(element.length===1) return element[0]
            if(element.length<=0) throw new Error("Array is empty.")
            const flattenedArraySum = element
              .flat()
              .reduce(
                (accumlatedNumber, currentNumber) =>
                  accumlatedNumber + currentNumber
              );
            return flattenedArraySum
        }
        return element
    });
    return levelsOfNestedArrayCount
}
// console.log(checkLevelOfNestingOfArray([[1],1, {a:1} ]))