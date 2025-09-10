// Exercise 7:
// function mult(x,y){
//   return x*y;
// }

const multiplyNums = (...nums) => nums.reduce((accumulatedNum, currentNum)=>accumulatedNum * currentNum);
console.log(multiplyNums(2,2,9))