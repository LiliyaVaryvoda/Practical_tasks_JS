// 1. REMOVE REPEATED WORDS

function removeWords(str){
    const cleareArr = new Set(str.toLowerCase().replace(/\s+/g, ' ').trim().split(' '))
    return [...cleareArr].join(' ')
}


console.log(removeWords('hello world hello hello'));         // 'hello world'
console.log(removeWords('  one   two  one  '));              // 'one two'
console.log(removeWords('Word word WORD'));                  // 'word'





// 2. REMOVE DUPLICATES FROM STRING


function removeDup(str){
    const uniqueSet = new Set(str.split(''))
    return [...uniqueSet].join('')
}

console.log(removeDup("helhlo worlood")) 
//helo wrd





// 3. REMOVE ALL WHITE SPACES FROM THE STRING

function removeSpaces(str){
    return str.replace(/\s+/g, '')
}


console.log(removeSpaces('    h   ello worl     d       '))
//helloworld





//  4. REMOVE ALL DIGITS FROM THE STRING

function removeDigits(str){
    return str.replace(/\d+/g, '')
}

console.log(removeDigits('hello3 wor5ld 6')) 
//hello world 
