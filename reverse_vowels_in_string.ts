const reverseVowels = string=>{
    const arrOfVowels = ["a", "e", "i", "o", "u"];
    const arrOfLettersAndObj = string.split("").map((letter, index)=>{
       return arrOfVowels.includes(letter.toLowerCase())? {letter:letter, index:index} : letter
    })
    const reverseArrOfLetterObj = arrOfLettersAndObj.filter(obj=>typeof obj==="object").reverse()
    const addReverseLettersToOriginalArr = arrOfLettersAndObj.map(value=>{
        return typeof value === "object"? reverseArrOfLetterObj.shift(): value
    })
    const reconstructArrOfString = addReverseLettersToOriginalArr.map(value=>{
       return typeof value === "object"?value.letter:value
    })
    return reconstructArrOfString.join("")
}
// In this kata, your goal is to write a function which will reverse the vowels in a string. 
// Any characters which are not vowels 
// should remain in their original position. Here are some examples:
console.log(reverseVowels("Hello!"))
// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.