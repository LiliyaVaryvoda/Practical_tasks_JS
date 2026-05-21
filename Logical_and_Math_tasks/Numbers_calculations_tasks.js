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
// AMSTRONG is number when sum of each number ^ n = the number itself like number 153 is amstrong because 1**3 + 5**3 + 3**3 = 153
// Find string number lenght, loop through string number and for each number element power to atring number lenght; then compare final to function number
function checkArmstrongNum(num){
    if (num<=0) return false
    const numLength = String(num).length
    let numMultiplied  =  0
    for (let elem of String(num)){
        let digit = Number(elem) ** numLength
        numMultiplied+=digit
    }
    return numMultiplied === num
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










// 14. Reverse a number
// Return NaN if not a number
// Use Math.sign() to retrieve if its is 1 or -1 or 0 (number is positive or negative)
// Then use Math.abs for number to remove sign
// Then make it string, then array, then reverse and then string again
// Use Number() to have a number from string

function reverseNumber(num) {
    if (typeof(num)!== 'number' || !Number.isFinite(num)) { return NaN}
    const sign = Math.sign(num)
    const numString = Number(Math.abs(num).toString().split('').reverse().join(''))
    return numString*sign
}

console.log(reverseNumber(-123)) // -321
console.log(reverseNumber(100)) // 1
console.log(reverseNumber(0)) // 0
console.log(reverseNumber('10N')) // NaN










// 15. Check if pallindrome
// Use String(), then split, reverse, join
// Compare with String(incoming number)

function isPalindromeNumber(num) {
    if (typeof(num)!=='number' || !Number.isFinite(num)) {return false}
    if (num < 0 ){ return false}

    const numberString = String(num).split('').reverse().join('')
    return String(num)===numberString
}


console.log(isPalindromeNumber(1221)) //true
console.log(isPalindromeNumber(-1221)) // false
console.log(isPalindromeNumber(1234)) //false
console.log(isPalindromeNumber('1234')) // false









// 16. Return the sum of all digits of the number
// Check if type is nit number or number is not finite
// Then convert to the string math.abs() number
// Then split and reduce and return the sum
function numberDigitsSum(num){
    if (typeof(num) !== 'number' || !Number.isFinite(num)){return NaN}
    const strNumber = String(Math.abs(num)).split('').reduce((acc,curr) => acc +Number(curr), 0)
    return strNumber
}

console.log(numberDigitsSum(654)) //15
console.log(numberDigitsSum(-654)) //15
console.log(numberDigitsSum('654')) // NaN
console.log(numberDigitsSum('65g')) // NaN









// 17. FLoating numbers comparison
// Use tolerance (elipson)

function compareFloatNumbers(num1, num2, sum){
    const epsilon = 1e-10
    return Math.abs((num1+num2) - sum) < epsilon

}

console.log(compareFloatNumbers(0.1, 0.2, 0.3))
console.log(compareFloatNumbers(0.1, 0.2, 0.35))










// 18. Calculate diits occurencies
// Return null if input type is not number, string or NUmber(input) is NaN
// Use map


function countOccurenciesDigits(num) {
  if ((typeof (num)!== 'number' && typeof (num)!=='string' )|| isNaN(Number(num))) return null
  let numbersMap = new Map()
  for (let elem of String(num)){
    if (elem==='.'|| elem===',' || elem==='-') continue
    if (numbersMap.has(elem)){
      numbersMap.set(elem, numbersMap.get(elem)+1)
    }
    else{
      numbersMap.set(elem, 1)
    }
  }

  let biggestNumber = null
  let occurenciesNumber = 0

  for (let [key, value] of numbersMap){
    if (value > occurenciesNumber){
      occurenciesNumber = value
      biggestNumber = key
    }
  }

return { digit: biggestNumber, count: occurenciesNumber }
}

console.log(countOccurenciesDigits(5758475759444444494))
console.log(countOccurenciesDigits('hello'))
console.log(countOccurenciesDigits(3.566))
console.log(countOccurenciesDigits('123454'))
console.log(countOccurenciesDigits(-123333))