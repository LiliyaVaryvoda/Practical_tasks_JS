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
        if (vowels.includes(char)){
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