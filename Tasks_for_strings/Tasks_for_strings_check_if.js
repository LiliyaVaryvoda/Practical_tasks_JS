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
    const sortedStr1 = str1.toLowerCase().split('').sort().join('')
    const sortedStr2 = str2.toLowerCase().split('').sort().join('')
    return sortedStr1 === sortedStr2

}

console.log(checkIfAnagram("listen", "silent")); // true
console.log(checkIfAnagram("listeN", "Silent")); // true
console.log(checkIfAnagram("listen", "hello")); // false