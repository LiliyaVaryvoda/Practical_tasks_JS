// 1. CHECK IF STRING IS PALLINDROME


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

function checkIfUniqueChar(str) {
    const setStr = new Set(str)
    return str.length === setStr.size
}

console.log(checkIfUniqueChar('programming')) //false
console.log(checkIfUniqueChar('hey')) //true








// 4. CHECK WHICH VERSION IS LATEST


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

function checkIfPangram(str){
    const setStr = new Set (str.toLowerCase().replace(/[^a-z]/gu, ''))
    return setStr.size === 26

}

console.log(checkIfPangram('The quick brown fox jumps over the lazy dog.')) //true
console.log(checkIfPangram('The quick brown fox jumps over the lazy dog@!.')) //true
console.log(checkIfPangram('Pack my box with five dozen liquor jugs.')) // true
console.log(checkIfPangram('Hello world.')) // false









// 6. CHECK IF STRING CONTAINS ALL VOWELS

function checkIfAllVowels(str){
    const vowels = ['a', 'o', 'i', 'e', 'u']
    return vowels.every(v => str.toLowerCase().includes(v))
}

console.log(checkIfAllVowels('education')) // true
console.log(checkIfAllVowels('sequoia')) // true
console.log(checkIfAllVowels('hello'))   // false









// 7. CHECK IF STRING HAS CONSECUTIVE REPEATING CHARACTERS

function hasConsecutiveRepeatingLetters(str){
    return /(.)\1/.test(str)
}

console.log(hasConsecutiveRepeatingLetters("hello")); // true  ('ll')
console.log(hasConsecutiveRepeatingLetters("world")); // false
console.log(hasConsecutiveRepeatingLetters("bookkeeper")); // true ('oo', 'kk', 'ee')
console.log(hasConsecutiveRepeatingLetters("abc")); // false









// 8. CHECK IF STRING CONTAINS ONLY NUMBERS

function checkStrNum(str){
    const regex = /^\d+$/
    return regex.test(str)
}


console.log(checkStrNum('15979')) //true
console.log(checkStrNum('7j5jv+')) //false
console.log(checkStrNum('+609+')) //false









// 9. CHECK IF STRING CONTAINS ONLY LETTERS


function checkIfLetters(str){
    const regex = /^[a-zA-Z ]+$/
    return regex.test(str)
}


console.log(checkIfLetters('abd1h4')) //false
console.log(checkIfLetters('abd!h+')) //false
console.log(checkIfLetters('ababa ababba')) //true
console.log(checkIfLetters('ababab')) //true