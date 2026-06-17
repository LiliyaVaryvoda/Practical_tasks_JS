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

// Map(8) {
//     'p' => 1,
//     'r' => 2,
//     'g' => 4,
//     'o' => 1,
//     'a' => 1,
//     'm' => 2,
//     'i' => 1,
//     'n' => 1
//   }







// 2. FIND OCCURENCIES IN STRING FOR WORDS
// Use map
// Match only a-z ?? []

function findOccurrencesWords(str){
    if (typeof(str)!== 'string' || str.trim().length === 0) {return 'Empty string'}
    let mapOcc= new Map()
    const clearedStr = str.toLowerCase().match(/[a-z]+/g) ?? []
    if (clearedStr.length === 0) {return 'Empty string'}
    for (let elem of clearedStr){
        if (mapOcc.has(elem)){
            mapOcc.set(elem, mapOcc.get(elem) +1)
        }
        else{
            mapOcc.set(elem, 1)
        }
    }
    return Object.fromEntries(mapOcc)
}

console.log(findOccurrencesWords("hello world hello")) // { hello: 2, world: 1 }
console.log(findOccurrencesWords('Hello   world,how are you?'))// { hello: 2, world: 1 }
console.log(findOccurrencesWords(''))// Empty string
console.log(findOccurrencesWords('hello'))// { hello: 1 }
console.log(findOccurrencesWords('?'))// { hello: 1 }
console.log(findOccurrencesWords('hello?here'))// { hello: 1, here: 1 }







// 3. FIND THE SMALLEST OCCURENCIES CHARACTER


function findSmallestOccurencies(str) {
    const clearedStr = str.toLowerCase().replace(/[^a-z0-9]+/g, '')
    let wordsMap = new Map()
    for (let i = 0; i < clearedStr.length; i++) {
        if (wordsMap.has(clearedStr[i])) {
            wordsMap.set(
                clearedStr[i],
                wordsMap.get(clearedStr[i]) + 1
            )
        } else {
            wordsMap.set(clearedStr[i], 1)
        }
    }
    let smallestNumber = Infinity
    let smallestArr = {}
    for (let value of wordsMap.values()) {
        if (value < smallestNumber) {
            smallestNumber = value
        }
    }
    for (let [key, value] of wordsMap) {
        if (value === smallestNumber) {
            smallestArr[key]=value
        }
    }
    return smallestArr
}



console.log(findSmallestOccurencies('hello world here'))
// { w: 1, d: 1 }






// 4. FIND THE BIGGEST OCCURENCY CHARACTER

function findBiggestOccurencies(str) {
    const clearedStr = str.toLowerCase().replace(/[^a-z0-9]+/g, '')
    let wordsMap = new Map()
    for (let i = 0; i < clearedStr.length; i++) {
        if (wordsMap.has(clearedStr[i])) {
            wordsMap.set(
                clearedStr[i],
                wordsMap.get(clearedStr[i]) + 1
            )
        } else {
            wordsMap.set(clearedStr[i], 1)
        }
    }
    let biggestNumOccurencies = -Infinity
    let biggestOccList = {}
    for (let value of wordsMap.values()){
        if (value>biggestNumOccurencies){
            biggestNumOccurencies = value
        }
    }
    console.log(biggestNumOccurencies)

    for (let [key, value] of wordsMap){
        if (value === biggestNumOccurencies){
            biggestOccList[key] = value
        }
    }
    return biggestOccList
}


console.log(findBiggestOccurencies('hello world here heh')) // { h: 4, e: 4 }






// 5. FIND FIRST NOT REPERATIVE CHARACTER IN STRING
// Use map
// Loop through string and use map.get(char) to find first with 1

function firstUniqueChar(str){
    if (typeof (str) !== 'string' || str.trim().length===0) { return null}
    let mapCharacters = new Map()
    for (let i = 0; i < str.length; i++){
        if (!mapCharacters.has(str[i])){
            mapCharacters.set(str[i], 1)
        }else{
            mapCharacters.set(str[i], mapCharacters.get(str[i]) +1)
        }
    }
    for (let i = 0; i < str.length; i++){
        if(mapCharacters.get(str[i]) === 1) {
            return str[i]
        }
    }
    return null

}


console.log(firstUniqueChar("aabbcdde")) // "c"
console.log(firstUniqueChar("aabbcc")) // null
console.log(firstUniqueChar("bbcd")) // c








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
    // const regex = /[^0-9]/g
    // const strCleared = str.replace(regex, '')
    // return strCleared.length>0 ? strCleared.length: -1
    const digits = str.match(/[0-9]/g)
    return digits? digits.length : -1
}


console.log(findTotalNumOfDigits('he110 wor1d!')) //4
console.log(findTotalNumOfDigits('h7j5j4k9')) //4
console.log(findTotalNumOfDigits('aaaa')) //-1
console.log(findTotalNumOfDigits('-1')) //1









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








// 9.1 Count vowels (just count)
// Use count variable and Set
// Loop through string and check if set has it, update count

function countVowels(str){
    if (typeof(str)!== 'string' || str.trim().length === 0){return 0}
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0
    for (let elem of str){
        if (vowelsSet.has(elem)){
            count++
        }
    }
    return count
}

console.log(countVowels("hello")) // 2
console.log(countVowels("aaa")) // 3
console.log(countVowels("JavaScript")) // 3









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
    if(typeof(str)!== 'string' || str.length===0){return -1}
    const arr = str.split(/[^a-zA-Z]+/g).filter(Boolean)
    if (arr.length === 0) {return -1}
    return arr.reduce((acc,cur) => acc.length<=cur.length? acc : cur)
}

console.log(findShortestWord('beautifully hello, world amazing'))// hello
console.log(findShortestWord(''))// -1
console.log(findShortestWord('hello'))// hello
console.log(findShortestWord('????'))// -1









// 12. COUNT CONSONANTS IN STRING

function countConsonants(str){
    const vowels = ['a', 'o', 'i', 'e', 'u']
    let mapChar = new Map()
    for (let elem of str.toLowerCase()){
        if (/[a-z]/.test(elem) && !vowels.includes(elem)){
            if (mapChar.has(elem)){
                mapChar.set(elem, mapChar.get(elem)+1)
            }
            else{
                mapChar.set(elem, 1)
            }
        }
    }
    return mapChar
}

console.log(countConsonants('opIu dh!gNfin FF&'))

// Map(6) { 'p' => 1, 'd' => 1, 'h' => 1, 'g' => 1, 'n' => 2, 'f' => 3 }










// 13. COUNT WORDS IN SENTENSE

function countWordsInSentense(str){
    if (typeof(str)!=='string' || str.length===0){return -1}
    const regex = /[^a-zA-Z]+/g
    const strUpdated = str.split(regex).filter(Boolean)
    return strUpdated.length>0? strUpdated.length: -1
}

console.log(countWordsInSentense('Hello   world,how are you?'))// 5
console.log(countWordsInSentense(''))// -1
console.log(countWordsInSentense('hello'))// 1
console.log(countWordsInSentense('?'))// -1
console.log(countWordsInSentense('hello?here'))// 2











// 14. COUNT TOTAL SENTENCES IN PARAGRAPH

function countSentencesInParagraph(str){
    const sentence = str.split(/[.?!]/).map(sen => sen.trim()).filter(Boolean)
    return sentence.length
}

console.log(countSentencesInParagraph('It was a bright sunny morning, and the birds were singing cheerfully in the garden. Sarah decided to take a walk around the park to enjoy the fresh air and the colorful flowers. As she strolled along the winding paths, she noticed children playing joyfully on the swings and people walking their dogs. Hello!     How are you? Are you ok ???'))
// 6











// 15. FIND LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

function findSubStr(str) {
    let left = 0
    let maxStr = ''

    for (let right = 0; right < str.length; right++) {

        for (let currentWindow = left; currentWindow < right; currentWindow++) {

            if (str[currentWindow] === str[right]) {
                left = currentWindow + 1
                break
            }
        }

        if (right - left + 1 > maxStr.length) {
            maxStr = str.slice(left, right + 1)
        }
    }

    return maxStr
}




console.log(findSubStr('abcabcd')) //abcd
console.log(findSubStr('acbdc')) // acbd
console.log(findSubStr("abcae")); // "bcae"











// 16. COUNT HOW MANY TIMES SUBSTRING APPREAS IN STRING

function countSubstringOccurency(str, substr){
    let count = 0

    for (let i = 0; i <str.length; i++){
        if (str.slice(i, substr.length+i) === substr){
            count++
        }
    }

    return count
}

console.log(countSubstringOccurency('hello hello hello', 'hello')) //3
console.log(countSubstringOccurency('abababa', 'aba')) //3
console.log(countSubstringOccurency('aaaaa', 'aa')) //4
console.log(countSubstringOccurency('abc', '')) //0










// 17. FInd the most frequesnt char in string

function mostFrequentChar(str){
    let mapOcc = new Map()
    const cleanedStr = str.toLowerCase().replace(/\s+/g, '')
    if (cleanedStr.length === 0) {return null}
    for (let elem of cleanedStr){
        if (mapOcc.has(elem)){
            mapOcc.set(elem, mapOcc.get(elem) +1)
        }else{
            mapOcc.set(elem,1)
        }
    }
    let count = 0
    let char = null
    for (let [key, value] of mapOcc.entries()){
        if (value > count){
            char = key
            count = value
        }
    }
    return {char, count}
}

console.log(mostFrequentChar("javascript"))
// {
//   char: "a",
//   count: 2
// }

console.log(mostFrequentChar("mississippi"))
// {
//   char: "i",
//   count: 4
// }

console.log(mostFrequentChar("world"))
// {
//   char: "w",
//   count: 1
// }







// 18. FInd first dub

function findFirstDup(str){
    if (typeof(str)!== 'string' || str.trim() === ''){return 'No dub'}
    const seen = new Set()
    for (let elem of str){
        if (seen.has(elem)){
            return elem
        }
        else{
            seen.add(elem)
        }
    }
    return 'No dub'
}


console.log(findFirstDup('abcfab')) //a











// 19. FInd longest non repeated substring

function longestUniqueSubstring(str){
    if (typeof(str) !== 'string' || str.trim()===''){return 'Invalid string'}
    let longestStrLength = 0
            let longestSubstring

    let seen = new Set()
    let left = 0
    for (let right = 0;right < str.length; right++){
        while (seen.has(str[right])){
            seen.delete(str[left])
            left++
        }
        seen.add(str[right])
        let currentLength = seen.size
        if (currentLength>longestStrLength){
            longestStrLength = currentLength
            longestSubstring = str.slice(left, right+1)
        }
    }
    return longestSubstring

}



console.log(longestUniqueSubstring("abcabcbb")) //"abc"

console.log(longestUniqueSubstring("bbbbb")) //b










// 20. FInd longest pallindrome in string

function longestPalindrome(str){
    if (typeof(str)!=='string' || str.trim()===''){return 'Invalid string'}
    let start = 0
    let maxLength = 1

    for (let i =0; i< str.length; i++){
        expand(i, i)
        expand(i, i+1)
    }

    function expand(left, right){
        while(left>=0 && right <str.length && str[left] === str[right]){
            const lengthPallindrom = right - left + 1
            if (lengthPallindrom > maxLength){
                start = left
                maxLength = lengthPallindrom
            }
            left--
            right++
        }
    }
    return str.slice(start, start+maxLength)

}

console.log(longestPalindrome("babad"))
// "bab"

console.log(longestPalindrome("cbbd"))
// "bb"









// 21. Find common in one array




function findCommon(arr){
    if (arr.length === 0) {return -1}
    let commonValues = ''
    const arrString = arr.map(String)
    const firstValue = arrString[0]
    for (let char = 0; char<firstValue.length; char++){


        for (let word = 1; word<arrString.length; word++){

            if (arrString[word][char]!== firstValue[char]){
                return commonValues || -1
            }
        }
        commonValues+=firstValue[char]
    }
    return commonValues
}

console.log(findCommon([1234,1234567,12345,1234])) //1234