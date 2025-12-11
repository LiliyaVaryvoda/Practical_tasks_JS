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