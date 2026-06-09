// 1. Adding (+)

// If one if them is string, everyting is converted to string

console.log('5' + 1) // '51'

console.log('5' + true) // '5true'

console.log('5' + null) // '5null'

console.log('5' + []) // '5' as [] becomes ''

console.log('5' + [1, 3]) // '51,3'


// If there is number, then other(boolean, null, undefined) will become number 

console.log(1 + true) // 2 as true is 1

console.log(1 + null) // 1 as null becomes 0

console.log(1 + undefined) // NaN as undefined becomes NaN


// If there is no number, then both to numbers

console.log(true + false) // 1 as true is 1 and false is 0


// If there is array or object, they will become primitive and will become string

console.log([] + null) // 'null' as  [] will be '' and null will be 'null'

console.log([] + true) // 'true' as  [] will be '' and true will be 'true'

console.log({} + null) // '[object Object]null' as {} will be string 'Object' and null as string will become 'null'

console.log(1 + {}) // '1[object Object]' as {} will become 'Object' and then 1 will become '1'

console.log(1 + []) // '1' as [] will become '' and then 1 will become '1'

console.log(1 + [1,2]) // '11,2' as [1,2] will become string '1,2' and then 1 will become '1'


// Multiple with mixed types
// Coercion applies at each step


console.log('5' + 1 + 2) // '512'

console.log(5 + 1 + '2') // '62'

console.log(true + 2 + 'apples') // '3apples'

console.log(null + 5 + '!') // '5!'

console.log('5' + (1+2)) // '53'