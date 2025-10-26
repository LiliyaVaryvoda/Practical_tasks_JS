// 1. Check if the string is pallindrome



function isPalindrome(str) {
    let reversedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('')
    return str === reversedStr
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false