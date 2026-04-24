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











// 2. Quadratic equation

// ax**2 + bx + c = 0

// D = b**2 - 4ac

// x1 = (-b + √D) / (2a)
// x2 = (-b - √D) / (2a)

// D>0 means 2 roots, D=0 means 1 root, D<0 meant no roots


function functionQuadraticEquation(a,b,c){
    const dValue = b**2 - 4*a*c
    if (dValue > 0){
         const x1 = ((-b) - Math.sqrt(valueD)  ) / (2*a)
         const x2 = ((-b) + Math.sqrt(valueD)  ) / (2*a)
         return {x1, x2}
    }
    else if (dValue===0){
         const x = -b / (2 * a)
         return x
    }
    else{
        return 'No valid root'
    }
}


console.log(functionQuadraticEquation(1, -5, 6));  // x1: 3, x2: 2
console.log(functionQuadraticEquation(1, -4, 4));  // x: 2
console.log(functionQuadraticEquation(1, 2, 5));   // No real roots