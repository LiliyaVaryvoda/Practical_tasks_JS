// 1. CHECK IF STRING CONTAINS ONLY NUMBERS

function checkStrNum(str){
    const regex = /^\d+$/
    return regex.test(str)
}


console.log(checkStrNum('15979')) //true
console.log(checkStrNum('7j5jv+')) //false
console.log(checkStrNum('+609+')) //false





// 2. CHECK IF STRING CONTAINS ONLY LETTERS


function checkIfLetters(str){
    const regex = /^[a-zA-Z ]+$/
    return regex.test(str)
}


console.log(checkIfLetters('abd1h4')) //false
console.log(checkIfLetters('abd!h+')) //false
console.log(checkIfLetters('ababa ababba')) //true
console.log(checkIfLetters('ababab')) //true