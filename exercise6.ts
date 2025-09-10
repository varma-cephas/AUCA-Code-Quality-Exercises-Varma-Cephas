// Exercise 6:
// function maxNumber(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else {
//     if (b > a && b > c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
// }

const maxNumber = (num1,num2,num3)=>{
    if(new Set([num1, num2, num3]).size===1) return "Please use at least two unique numbers"
    return Math.max(num1, num2, num3)
}

console.log(maxNumber(1,2,3))