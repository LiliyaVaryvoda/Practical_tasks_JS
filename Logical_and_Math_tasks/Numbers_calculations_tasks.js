// 1. COUNT PRIME NUMBERS FROM 1 TO 100

function countPrimeNumbers(start, end) {
    let primeNumbersArr = []
    for (let number = start; number <= end; number++) {
        if (number < 2) {
            continue
        }

        let isPrime = true


        for (let i = 2; i <= Math.sqrt(number); i++) {


            if (number % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primeNumbersArr.push(number)
        }

    }
    return primeNumbersArr
}

console.log(countPrimeNumbers(1, 100)) 
//[
//     2,  3,  5,  7, 11, 13, 17, 19,
//    23, 29, 31, 37, 41, 43, 47, 53,
//    59, 61, 67, 71, 73, 79, 83, 89,
//    97
//  ]








// 2. CHECK IF NUMBER IS AMSTRONG NUMBER

function checkArmstrongNum(num){
    if (num < 0) return false
    const digits = String(num)
    const power = digits.length
    let result = 0
    for(let digit of digits){
        result += Number(digit) ** power
    }
    return num === result

}

console.log(checkArmstrongNum(153)) // true
console.log(checkArmstrongNum(151)) //false
console.log(checkArmstrongNum(9474)) // true
console.log(checkArmstrongNum(370))  // true
console.log(checkArmstrongNum(-370))  // false








// 3. RETURN NUMBERS IN RANGE USING RECURSION

function returnNumbersInRange(start, end, result = []){
    if (start > end) { return result}
    result.push(start)
    return returnNumbersInRange(start+1, end, result)
}

console.log(returnNumbersInRange(2,9)) // [2, 3, 4, 5,6, 7, 8, 9]









// 4. RETURN PARTICULAR AMOUNT OF NUMBERS AFTER DOT


function returnNumberAfterDot(num, amount){
    const number = Number(num)
    return Number(number.toFixed(amount))
}

console.log(returnNumberAfterDot(2.567899, 2))










// 5. COUNT NUMBERS DIVISIBLE NY NUMBER IN GIVEN RANGE

function countNumbersDivisibleBy(num, range1, range2){
    let count = []
    for (let i = range1; i <=range2; i++){
        if (i%num === 0){
            count.push(i)
        }
    }
    return count
}

console.log(countNumbersDivisibleBy(4,2,44))









// 6. CHECK IF NUMBER IS PRIME IN ARRAY

function checkPrimeNumbersInArray(arr){
    let primeNumbers = []

    for (let char of arr){
        let isPrime = true

        if(char<2) {isPrime = false}
        if (char=== 2) {isPrime = true}
        for (let i = 2; i <= Math.sqrt(char); i++){

            if (char%i === 0){isPrime = false
                break
            }
        }
        if(isPrime){primeNumbers.push(char)}
    }
    return primeNumbers
}

console.log(checkPrimeNumbersInArray([2, 3, 4, 5, 9, 11, 15])) // [ 2, 3, 5, 11 ]









// 7. CONVERT NUMBER TO BINARY

function convertNumberToBinary(num){
    const binaryNum = num.toString(2)
    return binaryNum
}

console.log(convertNumberToBinary(11)) //1011









// 8. CONVERT NUMBER TO BINARY MANULLY

function convertToBinaryManually(num){
    let binaryNum = []
    let numberLeft = num

    while (numberLeft!==0){

        let left = numberLeft %2
        binaryNum.push(left)

        numberLeft = Math.floor(numberLeft/2)
    }
    return binaryNum.reverse().join('')
}


console.log(convertToBinaryManually(11)) //1011










// 9. CONVERT BINARY TO DECIMAL MANUALLY

function convertBinaryToDecimal(num){
    const stringNum = String(num)
    let decimalNumber = 0
    let power = 0
    for (let i = stringNum.length-1; i>=0; i--){
        console.log(stringNum[i], i)
        decimalNumber+=Number(stringNum[i]) * Math.pow(2, power)
        power++
    }
    return decimalNumber
}

console.log(convertBinaryToDecimal(1011)) //11












// 10. CONVERT NUMBER TO ROMAN


function toRoman(num) {
    const romanMap = [
      { value: 1000, symbol: 'M' },
      { value: 900,  symbol: 'CM' },
      { value: 500,  symbol: 'D' },
      { value: 400,  symbol: 'CD' },
      { value: 100,  symbol: 'C' },
      { value: 90,   symbol: 'XC' },
      { value: 50,   symbol: 'L' },
      { value: 40,   symbol: 'XL' },
      { value: 10,   symbol: 'X' },
      { value: 9,    symbol: 'IX' },
      { value: 5,    symbol: 'V' },
      { value: 4,    symbol: 'IV' },
      { value: 1,    symbol: 'I' }
    ]
   
   
    let result = ''
   
   
    for (let i = 0; i < romanMap.length; i++) {
      while (num >= romanMap[i].value) {
        result += romanMap[i].symbol
        num -= romanMap[i].value
      }
    }
   
   
    return result
   }
   

console.log(toRoman(15)) // XV











// 11. 

console.log(0.1 + 0.2 == 0.3) //false
console.log(0.1 + 0.2 === 0.3) //false

const epsilon = 1*Math.pow(10, -10)
console.log(Math.abs((0.1+0.2) - 0.3) < epsilon) //true











// 12. NUMBER() AND NOT OPERATOR : ! CONVERTS TO BOOLEAN AND THEN MAKE OPPOSITE (so -3 is Boolean truthy and NOT makes it falsy), NUMBER() TAKES FALSY AS 0


const a = -3
console.log(Number(!a)) // 0










// 13. NAN IS NOT EQUAL TO ANYTHING

console.log(NaN === NaN) // false
console.log(Number.isNaN('abc')) // false
console.log(Number.isNaN(-1)) //false
console.log(Number.isNaN(NaN)) // true
