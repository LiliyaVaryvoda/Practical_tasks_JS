// 1. FIND OCCURENCIES IN STRING FOR CHARACTERS


function findOccurrencesStr(str){
    let mapOccurencies = new Map()

    for (let i = 0; i<str.length; i++){
        if (mapOccurencies.has(str[i])){
            mapOccurencies.set(str[i], mapOccurencies.get(str[i])+1)
        }
        else{
            mapOccurencies.set(str[i], 1)
        }
    }
    return mapOccurencies
}


console.log(findOccurrencesStr("prgogrammingg"))





// 2. FIND OCCURENCIES IN STRING FOR WORDS


function findOccurrencesWords(str){
    let mapOccurencies = new Map()
    let arrayWords = str.toLowerCase().replace(/[^\w\s]/g, '')
    .split(/\s+/)

    for (let i = 0; i<arrayWords.length; i++){
        if (mapOccurencies.has(arrayWords[i])){
            mapOccurencies.set(arrayWords[i], mapOccurencies.get(arrayWords[i])+1)
        }
        else{
            mapOccurencies.set(arrayWords[i], 1)
        }
    }
    return mapOccurencies
}


console.log(findOccurrencesWords("hello world how are you hello, doing hello are ok"))





// 3. FIND THE SMALLEST OCCURENCIES CHARACTER


function findSmallestOccurencies(str) {
    let wordsMap = new Map()
    const strWithoutSpaces = str.replace(/\s/g, '')
    let minNum = Infinity
    let smallestOccurencies = {}
    for (let i = 0; i < strWithoutSpaces.length; i++) {
        if (wordsMap.has(strWithoutSpaces[i])) {
            wordsMap.set(
                strWithoutSpaces[i],
                wordsMap.has(strWithoutSpaces[i]) + 1
            )
        } else {
            wordsMap.set(strWithoutSpaces[i], 1)
        }
    }

    for (let value of wordsMap.values()) {
        if (value < minNum) {
            minNum = value
        }

    }

    for ([keys, value] of wordsMap.entries()) {
        if (value === minNum) {
            smallestOccurencies[keys] = value
        }
    }
    return smallestOccurencies
}


console.log(findSmallestOccurencies('hello world here'))
//{ h: 1, e: 1, w: 1, r: 1, d: 1 }






// 4. FIND THE BIGGEST OCCURENCY CHARACTER

function findBiggestOccurencies(str) {
    const clearedStr = str.replace(/\s/g, '')
    let mapChar = new Map()
    let biggestNum = 0
    let biggestOccurencies = {}
    console.log(clearedStr)
    for (let char = 0; char< clearedStr.length; char ++){
        if (mapChar.has(clearedStr[char])){
            mapChar.set(clearedStr[char], mapChar.get(clearedStr[char]) + 1)
        }
        else{
            mapChar.set(clearedStr[char], 1)
        }
    }

    for (let value of mapChar.values()){
        if (value> biggestNum)
            biggestNum = value
    }

    for (let [key, value] of mapChar.entries())
        if (value === biggestNum){
            biggestOccurencies[key]=value
        }

    return biggestOccurencies

}


console.log(findBiggestOccurencies('hello world here heh'))






// 5. FIND FIRST NOT REPERATIVE CHARACTER IN STRING

function findNonRepetative(str) {
    let mapOccurencies = new Map()
    for (let char = 0; char < str.length; char++) {
        if (mapOccurencies.has(str[char])) {
            mapOccurencies.set(str[char], mapOccurencies.get(str[char]) + 1)
        }
        else {
            mapOccurencies.set(str[char], 1)
        }
    }

    console.log(mapOccurencies)


    for (let [key, value] of mapOccurencies.entries()){
        if (value === 1){
            return [key, str.indexOf(key)]
        }
    }
}


console.log(findNonRepetative("aabbbvbc"))
//[ 'v', 5 ]
