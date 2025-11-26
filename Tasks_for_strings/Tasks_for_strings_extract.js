// 1. EXTRACT LETTERS FROM MIXED STRING

function extractWords(str){
    const clearedStr = str.replace(/[^a-zA-Z ]/g, '')
    if (clearedStr.length === 0) return -1
    else return clearedStr


}

console.log(extractWords("he33llo 42hello"))
// hello hello
console.log(extractWords('1234!@#$')) 
//-1






// 2. EXTRACT VOWELS FROM STRING

function returnVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let result = ''
    let noVowels = ''
    for (let char of str){
        if (vowels.includes(char.toLowerCase())){
            result+=char
        }
        else{
            noVowels+=char
        }
    }
    console.log(result)
    console.log(noVowels)
}



console.log(returnVowels("Hello World"))
// 'eoo'
// 'Hll Wrld'









// 3. EXTRACT SUBSTRING BETWEEN 2 CHARACTERS

function extractSubstringBetweenChars(str, char1, char2){
    const char1Index = str.indexOf(char1)
    const char2Index = str.indexOf(char2, char1Index+1)
    if (char1Index===-1 || char2Index === -1) return -1
    return str.slice(char1Index, char2Index+1)
}

console.log(extractSubstringBetweenChars('hello world', 'd', 'w')) //-1
console.log(extractSubstringBetweenChars('hello world', 'e', 'w')) //ello w
console.log(extractSubstringBetweenChars('abcd', '0', 'd')) //-1
console.log(extractSubstringBetweenChars('cababc', 'a', 'c')) // ababc