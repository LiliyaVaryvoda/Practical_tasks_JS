// 1. REPLACE ALL OCCURENCIES IN THE STING

function replaceAllOccurrences(str, search, replacement) {
    const replacedStr = str.replace(new RegExp(search, 'gi'), replacement)
    return replacedStr
}

console.log(replaceAllOccurrences('hello world HELLO, hello!', 'hello', 'hi')) // hi world hi, hi!






// 2. REPLACE ALL SPACES WITH DASHES

function replaceSpacesWithDashes(str){
    return str.replace(/\s+/g, '-')
}

console.log(replaceSpacesWithDashes('hello w orld    ')) // hello-w-orld-







// 3. REPLACE EVERY VOWEL WITH THE NEXT CHARACTER IN THE STRING

function replaceVowelInString(str) {
    const vowels = ['a', 'e', 'o', 'u', 'i', 'A', 'E', 'O', 'U', 'I']
    let updatedStr = ''
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            if (i + 1 < str.length) {
                updatedStr += str[i + 1]
            } else {
                updatedStr += str[i]
            }
        }
        else {
            updatedStr += str[i]
        }
    }
    return updatedStr
}

console.log(replaceVowelInString('hello world')) //hlll  wrrld
console.log(replaceVowelInString('NO')) //NO
console.log(replaceVowelInString('Apple')); // ppple








// 4. REPLACE EVERY SECOND WORD WITH X

function replaceWordWithX(str){
    const updatedArrWords = str.split(/\s+/g).map((elem, index) => index % 2 === 0 ? elem : 'X').join(' ')
    return updatedArrWords
}

console.log(replaceWordWithX('I went to the store to buy some groceries because I realized we were out of milk, bread, and eggs.'))
// I X to X store X buy X groceries X I X we X out X milk, X and X