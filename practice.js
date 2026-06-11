

// const a = { value: 1 }
// Object.freeze(a)
// a.value = 2
// console.log(a.value)



// function outer() {
//   let x = 1
//   return function () {
//     x++
//     return x
//   }
// }
// const fn = outer()
// console.log(fn(), fn())



// function outer() {
//   let x = 1
//   return function () {
//     return x++
//   }
// }
// const fn = outer()
// console.log(fn(), fn())





// function outer() {
//   let x = 1
//   return () => x
// }
// const fn = outer()
// console.log(fn())



// function outer() {
//   let x = 1
//   return () => ++x
// }
// const fn = outer()
// console.log(fn(), fn())

// Remove duplicates by "id"
// const data = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ];



// // TASK:
// // Convert to clean UI format

// const api = {
//   user_data: {
//     first_name: "Anna",
//     last_name: "Smith"
//   }
// };


// // TASK:
// // Cache function results using object

// function expensive(n) {
//   return n * n;
// }



// // TASK:
// // Serialize object safely

// const obj = {};
// obj.self = obj;



// // TASK:
// // Update age WITHOUT modifying original object

// const user = {
//   name: "Anna",
//   age: 25
// };


// // TASK:
// // Make chaining work

// const calc = {
//   value: 0,
//   add(n) {},
//   multiply(n) {},
//   result() {}
// };




// // TASK:
// // Implement add, subtract methods

// const calc = {
//   value: 0
// };



// // TASK:
// // Replace all null → "N/A"

// const data = {
//   name: null,
//   profile: {
//     city: null,
//     age: 25
//   }
// };




// // TASK:
// // Sum all numbers

// const data = {
//   a: 10,
//   b: {
//     c: 20,
//     d: {
//       e: 30
//     }
//   }
// };



// // TASK:
// // Convert flat object into nested

// const input = {
//   "user.name": "Anna",
//   "user.address.city": "London"
// };



// // TASK:
// // Flatten object

// const user = {
//   name: "Anna",
//   address: {
//     city: "London",
//     zip: "12345"
//   }
// };




// // TASK:
// // Change city to "Berlin" WITHOUT mutating original object

// const user = {
//   profile: {
//     address: {
//       city: "London"
//     }
//   }
// };



// // TASK:
// // Get city safely (without crash)

// const user = {
//   profile: {
//     address: {
//       city: "London"
//     }
//   }
// };

// // get(user, "profile.address.city")

// // TASK:
// // Swap keys and values

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };


// function swapKeysValues(obj){
//     for (let key in obj){
//         console.log(key, obj[key])

//     }
// }

// console.log(swapKeysValues(obj))


// // TASK:
// // Remove all properties with value === false

// const permissions = {
//   read: true,
//   write: false,
//   delete: true
// };



// // TASK:
// // Convert first_name + last_name → fullName

// const user = {
//   first_name: "John",
//   last_name: "Doe"
// };



// // TASK:
// // Return number of keys in object

// const user = {
//   name: "Anna",
//   age: 25,
//   city: "London"
// };



// TASK:
// Remove "password" without mutating original object

// const user = {
//   name: "John",
//   password: "12345"
// };

// const user2 = Object.create(user)


// console.log(user2, user)


















// 21
// What will be printed?
// for (var i = 0; i < 3; i++) {
//   setTimeout((i) => console.log(i), 0)
// }

// // 22
// // What will be printed?
// for (let i = 0; i < 3; i++) {
//   setTimeout((i) => console.log(i), 0)
// }

// // 23
// // What will be printed?
// for (var i = 0; i < 3; i++) {
//   ((i) => {
//     setTimeout(() => console.log(i), 0)
//   })(i)
// }

// // // 24
// // // What will be printed?
// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 0)
//   })(i)
// }






// let x = 1;

// const obj = {
//   x: 2,
//   foo: function () {
//     return function () {
//       console.log(x);
//     };
//   }
// };

// obj.foo()();



// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
// }

// const user1 = new User('Anna')
// user1.sayHi() // Hi Anna







//moveDigitsInArray([0, 6, 3, 'hello', 0, 5, 'world']) // [ 6, 3, 'hello', 5, 'world', 0, 0 ]



// returnPeakElements([1, 3, 2, 5, 4])                // [ 3, 5 ]
// returnPeakElements([10, 5, 2])                     // [ 10 ]
// returnPeakElements([10, 5, 2, 20])                 // [ 10, 20 ]
// returnPeakElements([10])                           // [ 10 ]
// returnPeakElements(['hello'])                      // []
// returnPeakElements(['hello', 1])                   // [ 1 ]
// returnPeakElements(['2', '1'])                     // []
// returnPeakElements([])                             // []
// returnPeakElements([1, 'hello', 5, 3, null, 10, 2]) // [ 1, 5, 10 ]




// findMissingNumber([1, 3, 4, 6, 2, 7, 8, 9], 9) // [ 5 ]
// findMissingNumber([1, 2, 4, 5], 5)             // [ 3 ]
// findMissingNumber([1, 2, 4, 5, 6, 9], 9)       // [ 3, 7, 8 ]



// findIndexOfElemInArr(['a', 'b', 'c', 'd', 'e', 'f'], 'c') // 2
// findIndexOfElemInArr(['a', 'b', 'c', 'd', 'e', 'f'], 'n') // -1



// findMinimumNumInArr([{ n: 6 }, { c: 2 }, { n: 5 }, { k: 'hello' }]) // 2



// countArrNumbersFrequency([
//   1, 2, 3, 4, 5, 6,
//   11.5, -12, 0, Infinity, NaN,
//   "hello", true,
//   null, undefined,
//   [1, 2], { x: 1 }, () => 42, Symbol("s"), BigInt(9000)
// ]) 
// // [ 1, 2, 3, 4, 5, 6, 11.5, -12, 0 ]





// chunkArray([1, 2, 3, 4, 5, 6, 7], 3) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]




// sortArrofObj([
//   { id: 1, name: "Alice", age: 28 },
//   { id: 2, name: "Bob", age: 32 },
//   { id: 3, name: "Charlie", age: 25 }
// ])
// // [
// //   [
// //     { id: 1, name: 'Alice', age: 28 },
// //     { id: 2, name: 'Bob', age: 32 },
// //     { id: 3, name: 'Charlie', age: 25 }
// //   ],
// //   [
// //     { id: 3, name: 'Charlie', age: 25 },
// //     { id: 1, name: 'Alice', age: 28 },
// //     { id: 2, name: 'Bob', age: 32 }
// //   ]
// // ]







// ### Task 17: Sort Array of Objects by Price From Max to Min
// sortArrayOfObjects([
//     { name: "item1", price: 10 },
//     { name: "item2", price: 5 },
//     { name: "item3", price: 20 }
// ])
// // [
// //    { name: 'item3', price: 20 },
// //    { name: 'item1', price: 10 },
// //    { name: 'item2', price: 5 }
// // ]


// ### Task 18: Return Names Older Than a Certain Age
// returnUserNames([
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 },
//     { name: "John", age: 45 }
// ])
// // [ 'Bob', 'John' ]














// // 14. COUNT TOTAL SENTENCES IN PARAGRAPH

// function countSentencesInParagraph(str){
// }

// console.log(countSentencesInParagraph('It was a bright sunny morning, and the birds were singing cheerfully in the garden. Sarah decided to take a walk around the park to enjoy the fresh air and the colorful flowers. As she strolled along the winding paths, she noticed children playing joyfully on the swings and people walking their dogs. Hello!     How are you? Are you ok ???'))
// // 6



// // 15. FIND LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

// function findSubStr(str) {
// }

// console.log(findSubStr('abcabcd')) // abcd
// console.log(findSubStr('acbdc')) // acbd
// console.log(findSubStr("abcae")) // bcae



// // 16. COUNT HOW MANY TIMES SUBSTRING APPREAS IN STRING

// function countSubstringOccurency(str, substr){
// }

// console.log(countSubstringOccurency('hello hello hello', 'hello')) //3
// console.log(countSubstringOccurency('abababa', 'aba')) //3
// console.log(countSubstringOccurency('aaaaa', 'aa')) //4
// console.log(countSubstringOccurency('abc', '')) //0






// // 1. CAPITALIZE EACH WORD IN SENTENCE
// function capitalizeFirstLetterOfEachWord(str){

// }

// console.log(capitalizeFirstLetterOfEachWord("hello !world, hOw   are you?")) // Hello !World, How   Are You?
// console.log(capitalizeFirstLetterOfEachWord("hello world, hOw are you?")) // Hello World, How Are You?




// // 7. RETURN INITIALS OF FULL NAME
// function returnInitials(str){

// }

// console.log(returnInitials('Smith Anna johnson')) // S.A.J


// // 9. SLICE() WITH NEGATIVE NUMBER
// let e = 'abcdefg'
// e = e.slice(-3)

// console.log(e) // efg



// // 1. REPLACE ALL OCCURENCIES IN THE STRING

// function replaceAllOccurrences(str, search, replacement) {

// }

// console.log(replaceAllOccurrences('hello world HELLO, hello!', 'hello', 'hi'))
// // hi world hi, hi!











// // 4. REPLACE EVERY SECOND WORD WITH X

// function replaceWordWithX(str){

// }

// console.log(replaceWordWithX('I went to the store to buy some groceries because I realized we were out of milk, bread, and eggs.'))
// // I X to X store X buy X groceries X I X we X out X milk, X and X





// // 5. REPLACE EVERY VOWEL FROM ALPHABET

// function replaceVowelFromAlphabet(str){

// }

// console.log(replaceVowelFromAlphabet('Hello world'))
// // Hfllp wprld





// // 6. CHECK IF STRING CONTAINS ONLY ASCII CHARACTERS

// function checkForASCIIChar(str){

// }

// console.log(checkForASCIIChar("hello"));   // true
// console.log(checkForASCIIChar("123!@#"));  // true
// console.log(checkForASCIIChar("café"));    // false
// console.log(checkForASCIIChar("你好"));     // false


















// // 3. CONVERT CAMEL CASE TO SIMPLE WORDS

// function camelCaseSplit(str) {

// }

// console.log(camelCaseSplit('thisIsCamelCase')) // this Is Camel Case
// console.log(camelCaseSplit('HTMLParser')) // HTML Parser
// console.log(camelCaseSplit('HelloWorld')) // Hello World
// console.log(camelCaseSplit('userIDNumber')) // user ID Number





// // 4. CONVERT CAMEL CASE TO SNAKE_CASE

// function convertFromCamelToSnakeCase(str) {

// }

// console.log(convertFromCamelToSnakeCase('camelCaseString'))  // camel_case_string
// console.log(convertFromCamelToSnakeCase('thisIsATest'))      // this_is_a_test
// console.log(convertFromCamelToSnakeCase('userIDNumber'))     // user_id_number
// console.log(convertFromCamelToSnakeCase('HTMLParser'))       // html_parser
// console.log(convertFromCamelToSnakeCase('HelloWorld'))       // hello_world
// console.log(convertFromCamelToSnakeCase('version2HTMLParser')) // version2_html_parser





// // 5. CONVERT STRING TO BINARY REPRESENTATION

// function convertStrToBinary(str) {

// }

// console.log(convertStrToBinary('Hi')) // 01001000 01101001





// // 6. CONVERT BINARY TO NORMAL STRING

// function convertBinaryToStr(str) {

// }

// console.log(convertBinaryToStr('01001000 01101001')) //"Hi"







// // 7. PARSE QUERY STRING TO OBJECT

// function parseQueryToObject(str) {

// }

// console.log(parseQueryToObject("name=John&age=30&city=Paris"))
// // { name: 'John', age: '30', city: 'Paris' }







// // 8. ENCODE OBJECT INTO QUERY STRING

// function encodeObjIntoQuery(obj) {

// }

// console.log(encodeObjIntoQuery({ name: 'John', age: '30', city: 'Paris' }))
// // name=John&age=30&city=Paris





// // 9. ENCODE STRING USING CAESAR CIPHER

// function encodeStrToCaesar(str, number) {

// }

// console.log(encodeStrToCaesar('Hello world!z', 4)) // Lipps asvph!d





// // 10. DECODE CAESAR CIPHER TO STRING

// function decodeCipherToStr(str, number) {

// }

// console.log(decodeCipherToStr('Lipps asvph!d', 4)) // Hello world!z












// // 3. LOGICAL AND / OR

// console.log(false && true || false)

// console.log(true && false || true)

// console.log(false || true && false)

// console.log(true || false && false)

// console.log(false && false || true && false)

// console.log(true || false && true || false)

// console.log(false && true || true && false)

// console.log(true && true || false && false)





// console.log((false && true) || false)

// console.log(false && (true || false))

// console.log((true || false) && false)

// console.log((false || false) && (true || false))





// console.log(0 && false)

// console.log(1 && true && "hello" && 99)





// console.log(false || 0 || "yes")

// console.log(false || 0 || null)

// console.log((false || 0))




// console.log(0 && 1)

// console.log(1 && 2 && 3)

// console.log("" && "hello")

// console.log("hi" && "" && "world")





// console.log('5' + []) // 5

// console.log('5' + (1+2)) // 53

// console.log(1 + true)

// console.log(1 + null)

// console.log(1 + undefined)

// console.log(true + false)

// console.log([] + null)

// console.log([] + true)

// console.log({} + null)

// console.log(1 + {})

// console.log(1 + [])

// console.log(1 + [1,2])

// console.log('5' + 1 + 2)

// console.log(5 + 1 + '2')

// console.log(true + 2 + 'apples')

// console.log(null + 5 + '!')

// console.log('5' + (1+2))


// [1,1,2,3,3] → [2,1,2] (count of occurrences per number)
//[1,2,3] → [2,4,6]
// [{name:'a'}, {name:'b'}] → ['a','b']

// [
//   {type:'a', value:1},
//   {type:'b', value:2},
//   {type:'a', value:3}
// ]

// {
//   a: [1,3],
//   b: [2]
// }




// // [1,2,3] → "123" Build string manually using loop

// function buildStr(arr){
//     let finalStr = ''
//     for (let elem of arr){
//         finalStr+=elem
//     }
//     return finalStr
// }

// console.log(buildStr([1,2,3]))





// Check if a string is a palindrome.
// Check if two strings are anagrams.
// Check if all characters in a string are unique.
// Compare two version numbers and determine which version is newer.
// Check if a sentence is a pangram (contains every letter of the alphabet).
// Check if a string contains all five vowels.
// Check if a string contains consecutive repeating characters.
// Check if a string contains only numeric characters.
// Check if a string contains only alphabetic characters and spaces.
// Check if a string is composed of a repeating substring pattern.

// Compress a string using run-length encoding (e.g., aaabb → a3b2).
// Decompress a run-length encoded string (e.g., a3b2 → aaabb).
// Convert a camelCase or PascalCase string into separate words.
// Convert a camelCase or PascalCase string into snake_case.
// Convert a string into its binary representation.
// Convert a binary representation back into a string.
// Parse a query string into an object.
// Convert an object into a query string.
// Encode a string using a Caesar cipher.
// Decode a Caesar cipher back into the original string.


// Extract all letters and spaces from a mixed string containing letters, numbers, and symbols.
// Extract all vowels from a string and separate the remaining characters.
// Extract the substring between two specified characters.
// Extract the domain name from an email address.



// Count occurrences of each character in a string.
// Count occurrences of each word in a sentence.
// Find the least frequent character(s) in a string.
// Find the most frequent character(s) in a string.
// Find the first non-repeating character in a string.
// Count uppercase and lowercase letters in a string.
// Find common characters between two strings.
// Count the total number of digits in a string.
// Count occurrences of each vowel in a string.
// Count the total number of vowels in a string.
// Find all indices of a specific character in a string.
// Find the shortest word in a sentence.
// Count occurrences of each consonant in a string.
// Count the number of words in a sentence.
// Count the number of sentences in a paragraph.
// Find the longest substring without repeating characters.
// Count how many times a substring appears in a string.
// Find the most frequent character in a string.
// Find the first duplicate character in a string.
// Find the longest unique (non-repeating) substring in a string.
// Find the longest palindromic substring in a string.



// Capitalize the first letter of each word in a sentence.
// Swap (invert) the case of each character in a string.
// Return all words in a string sorted in alphabetical order.
// Generate a random alphanumeric string of a given length.
// Mask all digits in a string except for the last N digits.
// Pad a string with a specific character (e.g., *) up to a given length.
// Return the initials of a full name.
// Generate all substrings of a string.
// Understand and use negative indices with slice().
// Capitalize words in a string while ignoring non-letter characters.
// Reverse a string.
// Repeat characters in a string based on a frequency map/object.




// Remove duplicate words from a sentence while preserving order.
// Remove duplicate characters from a string.
// Remove all whitespace characters from a string.
// Remove all digits from a string.
// Remove all punctuation from a sentence while keeping letters, numbers, and spaces.


// Replace all occurrences of a substring in a string (case-insensitive).
// Replace all spaces in a string with dashes.
// Replace every vowel in a string with the next character in the string.
// Replace every second word in a sentence with "X".
// Replace every vowel in a string with the next character in the alphabet.
// Check if a string contains only ASCII characters.







// // Find the longest substring with at most K distinct characters
// console.log(longestSubstringAtMostK("aaabbcc", 2)) // "aaabb" or "bbcc"

// // Find the longest substring with exactly K distinct characters
// console.log(longestSubstringExactlyK("aaabbcc", 2)) // "aaabb" or "bbcc"

// // Minimum window substring containing all characters of another string
// console.log(minWindow("ADOBECODEBANC", "ABC")) // "BANC"

// // Smallest substring containing all vowels
// console.log(smallestVowelSubstring("aeiobcdfaeiou")) // "aeio"

// // Longest substring with equal vowels and consonants
// console.log(longestBalancedVowelConsonant("abcdeaeiou")) // depends input

// // Longest substring where no character appears more than twice
// console.log(longestAtMostTwoRepeats("aaabbbccdaa")) // "aabbbccd"

// // Implement strStr()
// console.log(strStr("hello", "ll")) // 2

// // Find all anagram start indices
// console.log(findAnagrams("cbaebabacd", "abc")) // [0, 6]

// // Wildcard pattern (? and *)
// console.log(isMatchWildcard("adceb", "*a*b")) // true

// // Regex-like pattern matching (no regex)
// console.log(isMatchPattern("aab", "c*a*b")) // true

// // Pattern repeats with gaps
// console.log(repeatingPatternGap("abXabYab", "ab?ab?ab")) // true

// // Base64 encode/decode
// console.log(base64Encode("hi")) // "aGk="
// console.log(base64Decode("aGk=")) // "hi"

// // URL encode/decode
// console.log(urlEncode("hello world")) // "hello%20world"
// console.log(urlDecode("hello%20world")) // "hello world"

// // Dictionary compression (LZ-style)
// console.log(lzCompress("abababab")) // compressed form
// console.log(lzDecompress("...")) // "abababab"

// // Escape/unescape special characters
// console.log(escapeStr("a\nb\tc")) // "a\\nb\\tc"
// console.log(unescapeStr("a\\nb\\tc")) // "a\nb\tc"

// // ASCII encode/decode
// console.log(encodeASCII("AB")) // [65,66]
// console.log(decodeASCII([65,66])) // "AB"

// // Math expression parser
// console.log(evaluateExpression("2+3*(4-1)")) // 11

// // CSV parser
// console.log(parseCSV('a,"b,c",d')) // ["a","b,c","d"]

// // Log parser
// console.log(parseLog("ERROR 404 page_not_found")) 
// // { level: "ERROR", code: 404, msg: "page_not_found" }

// // HTML tag extractor
// console.log(extractTags("<div><p></p></div>")) // ["div","p"]

// // Tokenizer
// console.log(tokenize("Hello, world!")) // ["Hello", ",", "world", "!"]

// // Palindromic substrings count
// console.log(countPalindromicSubstrings("aaa")) // 6

// // Longest palindromic subsequence
// console.log(lps("bbbab")) // 4

// // Min deletions to palindrome
// console.log(minDeletionsPalindrome("abcda")) // 2

// // One deletion palindrome check
// console.log(validPalindromeOneDeletion("abca")) // true

// // Palindrome partitioning
// console.log(palindromePartition("aab")) // [["a","a","b"],["aa","b"]]

// // Sort chars by frequency
// console.log(frequencySort("tree")) // "eetr"

// // Top K frequent characters
// console.log(topKFrequent("aabbccc", 2)) // ["c","a"]

// // Closest to average frequency
// console.log(closestToAvg("aabbc")) // "c"

// // Group words by frequency
// console.log(groupByFrequency("a a b c c c")) 
// // { "2": ["a"], "1": ["b"], "3": ["c"] }

// // First char freq > N
// console.log(firstCharFreqGreater("aaabbc", 2)) // "a"

// // Normalize string
// console.log(normalize(" HéLLo ")) // "hello"

// // Remove emojis
// console.log(removeEmojis("hi😀")) // "hi"

// // Sanitize input
// console.log(sanitize("<script>")) // ""

// // URL slug
// console.log(slugify("Hello World!")) // "hello-world"

// // Variable name generator
// console.log(makeVarName("123 hello world")) // "helloWorld"

// // Backspace compare
// console.log(backspaceCompare("ab#c","ad#c")) // true

// // Longest common prefix
// console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"

// // Longest common substring
// console.log(longestCommonSubstring("abcde","cdeab")) // "cde"

// // Rotation check
// console.log(isRotation("abcde","cdeab")) // true

// // Balanced brackets
// console.log(isValidBrackets("()[]{}")) // true

// // Remove adjacent duplicates
// console.log(removeAdjacent("abbaca")) // "ca"

// // Decode nested string
// console.log(decodeString("3[a2[b]]")) // "abbabbabb"

// // Simplify path
// console.log(simplifyPath("/a/./b/../c")) // "/a/c"

// // Word break
// console.log(wordBreak("leetcode", ["leet","code"])) // true

// // Longest repeating substring
// console.log(longestRepeatingSubstring("banana")) // "ana"

// // Rabin-Karp
// console.log(rabinKarp("hello","ll")) // 2

// // Edit distance
// console.log(editDistance("horse","ros")) // 3

// // Manacher palindrome
// console.log(longestPalindromeManacher("babad")) // "bab" or "aba"