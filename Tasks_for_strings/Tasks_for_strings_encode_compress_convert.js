// 1. COMPRESS STRING (aaabb → a3b2)


function compressStr(str) {
    let result = ''
    let count = 1

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        }
        else {
            result += str[i] + count
            count = 1
        }
    }
    return result

}

console.log(compressStr('aaabb')) //a3b2
console.log(compressStr('aaabbccaaa')) //a3b2c2a3






// 2. DECOMPRESS STRING (a3b2 → aaabb)

function decompressString(str) {
    return str.replace(/([a-zA-Z])(\d+)/g, (_, char, count) => char.repeat(Number(count)));
}


console.log(decompressString('a3b2')) //aaabb
console.log(decompressString('a3b2a1c1b3')) //aaabbacbbb
console.log(decompressString('a11b2')) //aaaaaaaaaaaaabb







// 3. CONVERT CAMEL CASE TO SIMPLE WORDS

function camelCaseSplit(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
}

console.log(camelCaseSplit('thisIsCamelCase')) // this Is Camel Case
console.log(camelCaseSplit('HTMLParser')) // HTML Parser
console.log(camelCaseSplit('HelloWorld')) // Hello World
console.log(camelCaseSplit('userIDNumber')) // user ID Number







// 4. CONVERT CAMEL CASE TO SNAKE_CASE

function convertFromCamelToSnakeCase(str) {
    const strSplit = str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/([A-Z])([A-Z][a-z])/g, '$1_$2').toLowerCase()
    return strSplit
}

console.log(convertFromCamelToSnakeCase('camelCaseString'))  // camel_case_string
console.log(convertFromCamelToSnakeCase('thisIsATest'))      // this_is_a_test
console.log(convertFromCamelToSnakeCase('userIDNumber'))      // user_id_number
console.log(convertFromCamelToSnakeCase('HTMLParser'))      // html_parser
console.log(convertFromCamelToSnakeCase('HelloWorld'))      // hello_world
console.log(convertFromCamelToSnakeCase('version2HTMLParser')) // version2_html_parser







// 5. CONVERT STRING TO BINARY REPRESENTATION

function convertStrToBinary(str){
    const arrWord = str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ')
    return arrWord
}

console.log(convertStrToBinary('Hi')) // 01001000 01101001







// 6. CONVERT BINARY TO NORMAL STRING

function convertBinaryToStr(str){
    const binaryValue = str.split(' ').map(elem => {
        const decimal = parseInt(elem, 2)
        return String.fromCharCode(decimal)
    })
    return binaryValue.join('')
}

console.log(convertBinaryToStr('01001000 01101001')) //"Hi"









// 7. PARSE QUERY STRING TO OBJECT

function parseQueryToObject(str){
    const objParsed = new URLSearchParams(str)
    return Object.fromEntries(objParsed)
}

console.log(parseQueryToObject("name=John&age=30&city=Paris")) // { name: 'John', age: '30', city: 'Paris' }










// 8. ENCODE OBJECT INTO QUERY STRING

function encodeObjIntoQuery(obj){
    const queryStr = new URLSearchParams(obj).toString()
    return queryStr
}

console.log(encodeObjIntoQuery({ name: 'John', age: '30', city: 'Paris' })) // name=John&age=30&city=Paris