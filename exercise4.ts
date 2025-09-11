const removeDuplicateElements = array =>{
    const deDuplicatedArr = [...new Set(array.flat())]
    return deDuplicatedArr;
}