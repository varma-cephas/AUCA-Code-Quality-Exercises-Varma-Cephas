// Exercise 7:
// function mult(x,y){
//   return x*y;
// }

const multiplyNumbers = (...numbers) =>
  numbers.reduce((accumulatedNum, currentNum) => accumulatedNum * currentNum);
console.log(multiplyNumbers(2,2,9))