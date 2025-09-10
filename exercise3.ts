// function reverseString(str) {
//   var reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

const reverseString = (str) =>
  str.length > 1
    ? str.split("").reverse().join("")
    : "Please use a valid string";
console.log(reverseString("tri"))