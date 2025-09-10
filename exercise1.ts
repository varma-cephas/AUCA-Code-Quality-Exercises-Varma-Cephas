// function calculateAverage(numbers) {
//   var sum = 0;
//   var count = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     count++;
//   }
//   var average = sum / count;
//   return average;
// }

const calculateAverage = (arrOfNumbers)=>{
    if(arrOfNumbers.length<=1) return "Array has less than or one number."
    const average=(arrOfNumbers.reduce((accumualtedNumber, currentNumber)=>accumualtedNumber+currentNumber)) / arrOfNumbers.length
    return average
}

console.log(calculateAverage([100]))