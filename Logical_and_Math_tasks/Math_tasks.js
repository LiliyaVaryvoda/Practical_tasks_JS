// 1. CALCULATE FACTORIAL OF NUMBER
// Use recursion as number * function(number - 1) and return 1 if number is 0 or 1 and return not valid if not a number of less than 0
function calculateFactorial(num){
    if (num < 0 || typeof num !== 'number') return 'Not valid'
    if (num === 1 || num === 0) return 1
    return  num * calculateFactorial(num-1)
}

console.log(calculateFactorial(5)) // 120
console.log(calculateFactorial(3)) // 6
console.log(calculateFactorial(6)) // 720
console.log(calculateFactorial(0)) // 1
console.log(calculateFactorial(-5)) // 'Not valid'
console.log(calculateFactorial('hello')) // 'Not valid'



