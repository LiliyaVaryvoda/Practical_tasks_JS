// 1. RETURN FIRST N VALUES OF FIBONACHI SEQUENCE
// Use loop and push first value, then define third and reassign first and second
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
// Use while (till first is less than desired num), push first, then create third and reassign first and second
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
// Use for loop and then retrieve number based on index

function returnNumberInPlace(place) {
    if (place<=0 || !Number.isInteger(place)) {return null}
    let fibNumbers = []
    let first = 0
    let second = 1
    for (let i= 0 ; i< place; i++){
        fibNumbers.push(first)
        let third = first+second
        first = second
        second = third
    }
    return fibNumbers[place-1]
}

console.log(returnNumberInPlace(6)); // 5
console.log(returnNumberInPlace(1)); // 0
console.log(returnNumberInPlace(0)); // null
console.log(returnNumberInPlace(-3)); // null
console.log(returnNumberInPlace("abc")); // null







// 4. CHECK IF NUMBER IS IN FIBONACCHI SEQUENCE
// Use while first number < number
// Push first number, create third number as sum of first and second; reassign first and second
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