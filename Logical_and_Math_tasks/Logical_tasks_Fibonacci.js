// 1. RETURN FIRST N VALUES OF FIBONACHI SEQUENCE

function fibonacchiFirstNumbers(value) {
    let fibonacchiNumbers = []
    let firstNum = 0
    let secondNum = 1

    for (let i = 0; i < value; i++) {
        fibonacchiNumbers.push(firstNum)
        let thirdNum = firstNum + secondNum

        firstNum = secondNum
        secondNum = thirdNum

    }
    return fibonacchiNumbers
}

console.log(fibonacchiFirstNumbers(15))
//[ 0,   1,   1,  2,  3,  5, 8,  13,  21, 34, 55, 89, 144, 233, 377]







// 2. RETURN FIBONACCHI NUMBERS UP TO N NUMBER

function returnFibonacchiUpToNum(num) {
    let numbersArr = []
    let firstNum = 0
    let secondNum = 1
    let thirdNum
    while (firstNum <= num) {
        numbersArr.push(firstNum)
        thirdNum = firstNum + secondNum

        firstNum = secondNum
        secondNum = thirdNum
    }

    return numbersArr
}

console.log(returnFibonacchiUpToNum(21))
// [0, 1,  1,  2, 3, 5, 8, 13, 21]








// 3. RETURN NUMBER IN N PLACE IN FIBONACCHI SEQUENCE

function returnNumberInPlace(place) {
    if (place === 1) return 0
    if (place === 2) return 1
    return returnNumberInPlace(place - 1) + returnNumberInPlace(place - 2)
}

console.log(returnNumberInPlace(10)) //34








// 4. CHECK IF NUMBER IS IN FIBONACCHI SEQUENCE

function checkIfFibonacchi(number) {
    let numbersArr = []
    let firstNum = 0
    let secondNum = 1
    let thirdNum
    while (firstNum <= number) {
        numbersArr.push(firstNum)
        thirdNum = firstNum + secondNum
        firstNum = secondNum
        secondNum = thirdNum
    }

    return numbersArr.includes(number)
}

console.log(checkIfFibonacchi(21)) //true
console.log(checkIfFibonacchi(22)) //false