const fibSequence = (number)=>{
    if(number===0)return 0
    if(number===1)return 1
    return fibSequence(number-1) + fibSequence(number-2)
}

console.log(fibSequence(5))