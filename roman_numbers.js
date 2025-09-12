const decode = (romanNumeralString)=>{
  if(romanNumeralString.length===0) return "Roman Str not valid"
  const arrOfRomanNumberStrings = romanNumeralString.split("").reverse();
  const mapOfRomanNumberAndValues = new Map([
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ])
  let totalSum = 0;
  for(const [ind, romanString] of arrOfRomanNumberStrings.entries()){
    if(ind===0){
      totalSum+=mapOfRomanNumberAndValues.get(romanString)
      continue
    }
    if(mapOfRomanNumberAndValues.get(romanString) < mapOfRomanNumberAndValues.get(arrOfRomanNumberStrings[ind-1])){
      totalSum-=mapOfRomanNumberAndValues.get(romanString)
      continue
    } 
    totalSum+=mapOfRomanNumberAndValues.get(romanString)
  }
	return totalSum;
}

// solution("IV")

const encode = (number)=>{
    const arrOfRomanNumber = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
    ];
    let romanNumeralStr=""
    while(number > 0){
        arrOfRomanNumber.forEach(object=>{
            if(number >= object.value){
                romanNumeralStr+=object.symbol
                number-=object.value
            }
        })
    }
    return romanNumeralStr
}

// console.log(encode(1994))