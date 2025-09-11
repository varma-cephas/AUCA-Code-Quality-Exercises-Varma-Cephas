const isNumberPrime = (number)=>{
    if(number<=1) return false
    let isPrime = true
    while(number>0){
        number = number/2
        if(number%2===0){
            isPrime=false
            break
        }
        number--
    }
    return isPrime
}

console.log(isNumberPrime(4))