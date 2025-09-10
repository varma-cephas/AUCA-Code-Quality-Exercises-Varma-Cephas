// function calculateFactorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     var factorial = 1;
//     for (var i = 2; i <= n; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }

const calculateFactorial = number=>{
    if(number === 0 || number === 1) 
        return 1
    let factorial = 1;
    for (let i = 2; i <= number; i++){
        factorial *= i;
    }
    return factorial;
}
// const calculateFactorial = number=>{
//     if(number === 0 || number === 1) return 1
//     let factorial = 1;
//     let count = 2
//     while(number<=count){
//         factorial *= count
//         count++
//         number--
//     }
//     return factorial
// }

console.log(calculateFactorial(10))