// Exercise 8:
// function discount(totalamount) {
//   var disc;
//   if (totalamount > 100) {
//     disc = totalamount * 0.1;
//   } else {
//     disc = totalamount * 0.05;
//   }
//   return disc;
// }
const getDiscountAmount = totalAmount =>{
    if(totalAmount<=100) 
        return "Please don't be cheap, and purchase something above 100 to get a discount!"
    if(totalAmount>100) return totalAmount*0.1
    return totalAmount * 0.05
}