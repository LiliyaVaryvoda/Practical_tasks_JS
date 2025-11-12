// 1. REPLACE ALL OCCURENCIES IN THE STING

function replaceAllOccurrences(str, search, replacement) {
    const replacedStr = str.toLowerCase().replaceAll(search, replacement)
    return replacedStr
}

console.log(replaceAllOccurrences('hello world HELLO, hello!', 'hello', 'hi')) // hi world hi, hi!






// 2. REPLACE ALL SPACES WITH DASHES

function replaceSpacesWithDashes(str){
    return str.replace(/\s+/g, '-')
}

console.log(replaceSpacesWithDashes('hello w orld    ')) // hello-w-orld-