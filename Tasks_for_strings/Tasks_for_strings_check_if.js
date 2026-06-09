// 1. CHECK IF STRING IS PALLINDROME
// Clean the original string, then reverse it and copare to reversed

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true








// 2. CHECK IF TWO STRINGS ARE ANAGRAMS


function checkIfAnagram(str1, str2) {
    const sortedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('')
    const sortedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('')
    return sortedStr1 === sortedStr2

}

console.log(checkIfAnagram("listen", "silent")); // true
console.log(checkIfAnagram("listeN", "Silent")); // true
console.log(checkIfAnagram("listen", "hello")); // false










// 3. CHECK IF ALL CHARACTERS IN STRING ARE UNIQUE
// Remove whitespaces, use Set and compare Set size to no-spaces string length
function checkIfUniqueChar(str) {
    const strUpdated = str.replaceAll(' ', '')
    const uniqueStr = new Set(strUpdated)
    return strUpdated.length === uniqueStr.size
}

console.log(checkIfUniqueChar("programming")); // false
console.log(checkIfUniqueChar("hey")); // true
console.log(checkIfUniqueChar("hey i am")); // true








// 4. CHECK WHICH VERSION IS LATEST
// Use Number(number ?? 0)

function checkVersion(str1, str2) {
    const arr1 = str1.split('.')
    const arr2 = str2.split('.')
    const maxValue = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < maxValue; i++) {
        let arr1Value = Number(arr1[i] ?? 0)
        let arr2Value = Number(arr2[i] ?? 0)

        if (arr1Value > arr2Value) {
            return str1
        }
        if (arr2Value > arr1Value) {
            return str2
        }

    }
    return 'Equal versions'
}

console.log(checkVersion('5.4.3.2.1', '5.4.3.2')) // 5.4.3.2.1
console.log(checkVersion('5.4.3.5', '5.4.3.2')) // 5.4.3.5
console.log(checkVersion('5.4.3', '5.4.3')) // Equal versions
console.log(checkVersion('5.4.33', '5.4.3')) // 5.4.33










// 5. CHECK IF SENTENCE IS PANGRAM (CONTAINS EVERY LETTER FROM ALPHABET)
// Remove everything that is not letter and use Set.seze === 26
function checkIfPangram(str){
    const setStr = new Set (str.toLowerCase().replace(/[^a-z]/gu, ''))
    return setStr.size === 26

}

console.log(checkIfPangram('The quick brown fox jumps over the lazy dog.')) //true
console.log(checkIfPangram('The quick brown fox jumps over the lazy dog@!.')) //true
console.log(checkIfPangram('Pack my box with five dozen liquor jugs.')) // true
console.log(checkIfPangram('Hello world.')) // false









// 6. CHECK IF STRING CONTAINS ALL VOWELS
// Use .every()
function checkIfAllVowels(str){
    const vowels = ['a', 'o', 'i', 'e', 'u']
    return vowels.every(v => str.toLowerCase().includes(v))
}

console.log(checkIfAllVowels('education')) // true
console.log(checkIfAllVowels('sequoia')) // true
console.log(checkIfAllVowels('hello'))   // false









// 7. CHECK IF STRING HAS CONSECUTIVE REPEATING CHARACTERS
// Loop and check if element[i] equals element [i+1]
function hasConsecutiveRepeatingLetters(str) {
    if (typeof(str)!=='string'||str.length<=1) {return false}
    for (let i = 0; i < str.length-1; i++){
        if (str[i]===str[i+1]) {return true}
    }
    return false
}

console.log(hasConsecutiveRepeatingLetters("hello")); // true
console.log(hasConsecutiveRepeatingLetters("world")); // false
console.log(hasConsecutiveRepeatingLetters("bookkeeper")); // true
console.log(hasConsecutiveRepeatingLetters("abc")); // false










// 8. CHECK IF STRING CONTAINS ONLY NUMBERS
// Write a regex from start to end only numbers and use .test()

function checkStrNum(str){
    const regex = /^\d+$/
    return regex.test(str)
}


console.log(checkStrNum('15979')) //true
console.log(checkStrNum('7j5jv+')) //false
console.log(checkStrNum('+609+')) //false









// 9. CHECK IF STRING CONTAINS ONLY LETTERS
// Write a regex that from start to end only letters and spaces and use .test() method

function checkIfLetters(str){
    const regex = /^[a-zA-Z ]+$/
    return regex.test(str)
}


console.log(checkIfLetters('abd1h4')) //false
console.log(checkIfLetters('abd!h+')) //false
console.log(checkIfLetters('ababa ababba')) //true
console.log(checkIfLetters('ababab')) //true









// 10. CHECK IF STRING HAS REPEATED PATTERN
// DOuble the string, remove forst and last characters and check if it includes original string
function isRepeatingPattern(str) {
    if(typeof(str)!=='string' || str.length<=1) {return false}
    const updatedString = str+str
    const updatedString2 = updatedString.slice(1, updatedString.length-1)
    return updatedString2.includes(str)
}

console.log(isRepeatingPattern("abab")); // true
console.log(isRepeatingPattern("abcabcabc")); // true
console.log(isRepeatingPattern("aba")); // false
console.log(isRepeatingPattern("aaaa")); // true
console.log(isRepeatingPattern("a")); // false
console.log(isRepeatingPattern("a5a5")); // true
console.log(isRepeatingPattern("a5a6")); // false