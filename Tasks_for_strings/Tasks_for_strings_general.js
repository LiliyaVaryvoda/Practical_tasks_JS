// 1. CAPTALIZE EACH WORD IN SENTENCE

function capitalizeFirstLetterOfEachWord(str){
    return str.toLowerCase().replace(/\b\w/g, firstChar => firstChar.toUpperCase())

}

console.log(capitalizeFirstLetterOfEachWord("hello !world, hOw   are you?")) // Hello !World, How   Are You?
console.log(capitalizeFirstLetterOfEachWord("hello world, hOw are you?")) // Hello World, How Are You?








// 2. SWIPE THE CASE OF EACH CHARACTER IN STRING

function changeCaseForChar(str){
    let caseChangeStr = ''
    for (let char of str){
        if (char === char.toLowerCase()){
            caseChangeStr += char.toUpperCase()
        }
        else{
            caseChangeStr+= char.toLowerCase()
        }
    }
    return caseChangeStr
}

console.log(changeCaseForChar('hELLo WorlD')) // HellO wORLd









// 3. RETURN WORDS IN APLHABETICAL ORDER

function returnWordsAlphabetically(str){
    const arrayOfWords = str.toLowerCase().split(/[^a-zA-Z]/g).filter(Boolean)
    return arrayOfWords.sort((a,b) => a.localeCompare(b))
}

console.log(returnWordsAlphabetically('The quick brown fox jumps over the lazy dog'))








// 4. GENERATE A RANDOM ALPHANUMERICAL STRING OF GIVEN LENGTH
// Hardcode the string of all letters and numbers
// Loop for given length
// Find the index - Math.floor(Math.random() * hardcoded string length)
// Add value of this index to the final string

function generateRandomStr(num){
    const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < num; i++){
        let randomIndex = Math.floor(Math.random() * values.length)
        result+= values.charAt(randomIndex)
    }
    return result
}

console.log(generateRandomStr(11)) // any random for length 11 aka 6YM8OAdctW8










// 5. MASK DIGITS OF PHONE EXCEPT LAST FEW
// Use /\d/.test(elem) to check if element is digit; have a counter for seen digits
function maskDigits(str, num){
    let numbersArray = []
    let digitsSeen = 0
    for(let i = str.length-1; i>=0; i--){
        if(/\d/.test(str[i])){

            if(digitsSeen<num){

                numbersArray.unshift(str[i])
                digitsSeen++
            }
            else{
                numbersArray.unshift('*')
            }
        }
        else{
            numbersArray.unshift(str[i])
        }
    }
    return numbersArray.join('')

}

console.log(maskDigits('123-456-78-9-0', 4));  // ***-***-78-9-0
console.log(maskDigits('98 76543210', 4));    // ******3210
console.log(maskDigits('5551234', 3));       // ****234








// 6. PAD STRING WITH * TO LENGTH NUMBER FROM LEFT TO RIGHT

function padStrWithAsterisks(str, num){
    return str.padStart(num, '*')
}

console.log(padStrWithAsterisks('hello', 10));       // *****hello
console.log(padStrWithAsterisks('helloworld', 10));  // helloworld (already 10)
console.log(padStrWithAsterisks('hi', 5));          // ***hi









// 7. RETURN INITIALS OF FULL NAME

function returnInitials(str){
    return str.split(' ').map(elem => elem[0].toUpperCase()).join('.')
}

console.log(returnInitials('Smith Anna johnson'))








// 8. GENERATE ALL SUBSTRINGS FOR A STRING

function generateSubstringsForStr(str){
    let allSubStrings = []
    for (let i = 0; i< str.length; i++){
        for (let j = i; j< str.length; j++){
            allSubStrings.push(str.slice(i,j+1))
        }
    }
    return allSubStrings
}

console.log(generateSubstringsForStr('abc'))












// 9. SLICE() WITH NEGATIVE NUMBER : STRING LENGTH + THIS NEGATIVE INDEX (FOR EXAMPLE 7 -3 = 4 SO FROM 4 TILL END)
let e = 'abcdefg'
e = e.slice(-3)


console.log(e) // efg








// 10. Capitalize words (disregard spaces and characters)

function capitalizeWords(str){
    if (typeof(str) !== 'string' || str.trim().length === 0){return 'No words found'}
    const clearedStr = str.match(/[a-zA-Z]+/g) ?? []
    if (clearedStr.length === 0) {return 'No words found'}
    const arrCapitalize = clearedStr.map(elem => elem[0].toUpperCase()+elem.slice(1)).join(' ')
    return arrCapitalize
}

console.log(capitalizeWords("hello world"))
// "Hello World"

console.log(capitalizeWords("javaScript is fun"))
// "JavaScript Is Fun"

console.log(capitalizeWords(""))
// "No words found"










// 11. Reverse a string
// Use backwards loop

function reverseString(str){
    let updatedStr = ''
    for (let i = str.length-1; i>=0; i--){
        updatedStr+=str[i]
    }
    return updatedStr
}
console.log(reverseString("hello")) // "olleh"
console.log(reverseString("JavaScript")) // tpircSavaJ









// 12. Repeat characters


function repeatChar(str, obj){ 
    if (typeof(str)!=='string' || str.trim() === '') { return 'Invalid string'}
    let finalResult = []
    for (let elem of str){
        finalResult.push(elem.repeat(obj[elem] ?? 1))
    }
    return finalResult.join('')
} 
console.log(repeatChar("abc", { a: 1, b: 2, c: 3 })) // abbccc

