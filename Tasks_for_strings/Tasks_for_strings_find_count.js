// 1. FIND OCCURENCIES IN STRING FOR CHARACTERS


function findOccurrencesStr(str) {
    let mapOccurencies = new Map()

    for (let i = 0; i < str.length; i++) {
        if (mapOccurencies.has(str[i])) {
            mapOccurencies.set(str[i], mapOccurencies.get(str[i]) + 1)
        }
        else {
            mapOccurencies.set(str[i], 1)
        }
    }
    return mapOccurencies
}


console.log(findOccurrencesStr("prgogrammingg"))







// 2. FIND OCCURENCIES IN STRING FOR WORDS


function findOccurrencesWords(str) {
    let mapOccurencies = new Map()
    const arrayOfWords = str.toLowerCase().split(/[^a-zA-Z]/).filter(Boolean)
    for (let elem of arrayOfWords){
        if (mapOccurencies.has(elem)){
            mapOccurencies.set(elem, mapOccurencies.get(elem) + 1)
        }
        else{
            mapOccurencies.set(elem, 1)
        }
    }
    return mapOccurencies
}


console.log(findOccurrencesWords("Hello world how are you hello, doing hello are ok?"))






// 3. FIND THE SMALLEST OCCURENCIES CHARACTER


function findSmallestOccurencies(str) {
    let wordsMap = new Map()
    const strWithoutSpaces = str.replace(/\s/g, '')
    let minNum = Infinity
    let smallestOccurencies = {}
    for (let i = 0; i < strWithoutSpaces.length; i++) {
        if (wordsMap.has(strWithoutSpaces[i])) {
            wordsMap.set(
                strWithoutSpaces[i],
                wordsMap.has(strWithoutSpaces[i]) + 1
            )
        } else {
            wordsMap.set(strWithoutSpaces[i], 1)
        }
    }

    for (let value of wordsMap.values()) {
        if (value < minNum) {
            minNum = value
        }

    }

    for ([keys, value] of wordsMap.entries()) {
        if (value === minNum) {
            smallestOccurencies[keys] = value
        }
    }
    return smallestOccurencies
}


console.log(findSmallestOccurencies('hello world here'))
//{ h: 1, e: 1, w: 1, r: 1, d: 1 }






// 4. FIND THE BIGGEST OCCURENCY CHARACTER

function findBiggestOccurencies(str) {
    const clearedStr = str.replace(/\s/g, '')
    let mapChar = new Map()
    let biggestNum = 0
    let biggestOccurencies = {}
    console.log(clearedStr)
    for (let char = 0; char < clearedStr.length; char++) {
        if (mapChar.has(clearedStr[char])) {
            mapChar.set(clearedStr[char], mapChar.get(clearedStr[char]) + 1)
        }
        else {
            mapChar.set(clearedStr[char], 1)
        }
    }

    for (let value of mapChar.values()) {
        if (value > biggestNum)
            biggestNum = value
    }

    for (let [key, value] of mapChar.entries())
        if (value === biggestNum) {
            biggestOccurencies[key] = value
        }

    return biggestOccurencies

}


console.log(findBiggestOccurencies('hello world here heh'))






// 5. FIND FIRST NOT REPERATIVE CHARACTER IN STRING

function findNonRepetative(str) {
    let mapOccurencies = new Map()
    for (let char = 0; char < str.length; char++) {
        if (mapOccurencies.has(str[char])) {
            mapOccurencies.set(str[char], mapOccurencies.get(str[char]) + 1)
        }
        else {
            mapOccurencies.set(str[char], 1)
        }
    }

    console.log(mapOccurencies)


    for (let [key, value] of mapOccurencies.entries()) {
        if (value === 1) {
            return [key, str.indexOf(key)]
        }
    }
}


console.log(findNonRepetative("aabbbvbc"))
//[ 'v', 5 ]







// 6. COUNT UPPERCASE AND LOWERCASE LETTERS

function countCaseLetters(str) {
    const clearedStr = str.replace(/[^a-zA-Z]/g, '')
    let upperCaseCount = 0
    let lowerCaseCount = 0
    for (let char of clearedStr) {
        if (char.toLowerCase() === char) {
            lowerCaseCount++
        }
        else {
            upperCaseCount++
        }
    }
    return { upperCaseCount, lowerCaseCount }
}

console.log(countCaseLetters('BabaNa #   $eldeRberry1 %hEre *frUit'))
//{ upperCaseCount: 5, lowerCaseCount: 20 }







// 7. FIND COMMON CHARACTERS IN TWO STRINGS

function findCommonLetters(str1, str2) {
    let result = []
    const set1 = new Set(str1)
    const set2 = new Set(str2)
    for (let char of set1) {
        if (set2.has(char)) {
            result.push(char)
        }
    }
    return result
}

console.log(findCommonLetters('letoa', 'hello')) // [ 'l', 'e', 'o' ]







// 8. FIND TOTAL NUMBER OF DIGITS IN STRING

function findTotalNumOfDigits(str){
    return str.split('').filter(char => /\d/.test(char)).length
}

console.log(findTotalNumOfDigits('he110 wor1d!')) //4
console.log(findTotalNumOfDigits('h7j5j4k9')) //4






// 9. COUNT VOWELS IN STRING

function countVowelsInStr(str) {
    const vowels = ['a', 'o', 'e', 'i', 'u']
    let vowelsMap = new Map()
    for (let char of str.toLowerCase()) {

        if (vowels.includes(char)) {


            if (vowelsMap.has(char)) {
                vowelsMap.set(char, vowelsMap.get(char) + 1)
            } else {
                vowelsMap.set(char, 1)
            }
        }
    }
    return vowelsMap
}


console.log(countVowelsInStr('opIudhgnfi'))
// Map(3) { 'o' => 1, 'i' => 2, 'u' => 1 }







// 10. FIND OCCURENCIES OF CHARACTER IN STRING

function findAllIndices(str, char){
    let count = []
    for (let i = 0 ; i < str.length; i++){
        if (str[i].toLowerCase() === char.toLowerCase()){
            count.push(i)
        }
    }
    return count
}

console.log(findAllIndices("hello world", "o"))
//[4, 7]






// 11. FIND SHORTEST WORD IN SENTENCE

function findShortestWord(str){
    let strArray = str.split(/[^a-zA-Z]+/).filter(Boolean)
    console.log(strArray)
    return strArray.reduce((shortest, current) => {
        return shortest.length<current.length ? shortest : current
    })
}

console.log(findShortestWord('beautifully hello, world amazing')) // hello






// 12. COUNT CONSONANTS IN STRING

function countConsonants(str){
    const vowels = ['a', 'o', 'i', 'e', 'u']
    let mapWords = new Map()
    const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase()
    for (let char of cleanedStr){
        if (!vowels.includes(char)) {
            if(mapWords.has(char)){
                mapWords.set(char, mapWords.get(char) + 1)
            }
            else{
                mapWords.set(char, 1)
            }
        }
    }
    return mapWords
}

console.log(countConsonants('opIu dh!gNfin FF&'))







// 13. COUNT WORDS IN SENTENSE

function countWordsInSentense(str){
    const splitArray = str.split(/[^a-zA-Z]/g).filter(Boolean)
    console.log(splitArray)
    return splitArray.length
}

console.log(countWordsInSentense('Hello   world,how are you?'))