// 1. NAN IS NOT EQUAL TO ANYTHING

console.log(NaN===NaN) // false
console.log(Number.isNaN('abc')) // false
console.log(Number.isNaN(-1)) //false
console.log(Number.isNaN(NaN)) // true







// 2. NUMBER() AND NOT OPERATOR : ! CONVERTS TO BOOLEAN AND THEN MAKE OPPOSITE (so -3 is Boolean truthy and NOT makes it falsy), NUMBER() TAKES FALSY AS 0


const a = -3
console.log(Number(!a)) // 0







// 3. NON STRICT COMPARISON CONVERT ARRAY VALUE TO PRIMITIVE

function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return false
    }
    return true
}


console.log(isBig(1))    // false
console.log(isBig([2]))  // false
console.log(isBig([3]))  // true







// 4. LOGICAL && AND ||

console.log(true && false) // false
console.log(true || false)// true







// 5. RETURN WILL RETURN LAST VALUE IF THERE ARE FEW

function returnValue (a,b){
    return a, b
 }

 console.log(returnValue(1,2)) //2
 

