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