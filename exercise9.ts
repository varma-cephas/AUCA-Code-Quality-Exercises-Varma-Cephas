// Exercise 9:
// function calculateMatrixSum(matrix) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++)
//     for (var j = 0; j < matrix[i].length; j++)
//       sum += matrix[i][j];
//   return sum;
// }

const calculateMatrixSum = matrixArr =>{
    if(matrixArr.length<=1) return "Please enter a correct matrix, ask AI if you don't know how!"
    return matrixArr.map((arr=> arr.reduce((accumlatedNum, currentNum)=>accumlatedNum + currentNum))).reduce((accumulatedSum, currentSum)=>accumulatedSum+currentSum)
}
console.log(calculateMatrixSum([[1], [1], [1]]))