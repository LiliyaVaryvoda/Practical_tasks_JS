// 1. Check if the string is pallindrome



function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true






// 2. Find occurrences in the string for letters


function findOccurrencesStr(str){
    let mapOccurencies = new Map()

    for (let i = 0; i<str.length; i++){
        if (mapOccurencies.has(str[i])){
            mapOccurencies.set(str[i], mapOccurencies.get(str[i])+1)
        }
        else{
            mapOccurencies.set(str[i], 1)
        }
    }
    return mapOccurencies
}


console.log(findOccurrencesStr("prgogrammingg"))


// 3. Find occurrences in the string for words


function findOccurrencesWords(str){
    let mapOccurencies = new Map()
    let arrayWords = str.toLowerCase().replace(/[^\w\s]/g, '')
    .split(/\s+/)

    for (let i = 0; i<arrayWords.length; i++){
        if (mapOccurencies.has(arrayWords[i])){
            mapOccurencies.set(arrayWords[i], mapOccurencies.get(arrayWords[i])+1)
        }
        else{
            mapOccurencies.set(arrayWords[i], 1)
        }
    }
    return mapOccurencies
}


console.log(findOccurrencesWords("hello world how are you hello, doing hello are ok"))
