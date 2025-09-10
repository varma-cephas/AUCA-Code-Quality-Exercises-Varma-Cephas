// function findEvenNumbers(numbers) {
//   var evenNumbers = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }
const findEvenNumbers = arrOfNumbers=> {
    if(arrOfNumbers.length<=1) 
        return "Array has less than or one number."
    return arrOfNumbers.filter(number=>number%2 === 0)
}

console.log(findEvenNumbers([1,2,4,5]))