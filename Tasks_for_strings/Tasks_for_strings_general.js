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

console.log(changeCaseForChar('hELLo WorlD'))







// 3. MAKE SEPARATE WORDS FROM CAMEL CASE

function camelCaseSplit(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
}

console.log(camelCaseSplit('thisIsCamelCase')) // this Is Camel Case
console.log(camelCaseSplit('HTMLParser')) // HTML Parser
console.log(camelCaseSplit('HelloWorld')) // Hello World
console.log(camelCaseSplit('userIDNumber')) // user ID Number