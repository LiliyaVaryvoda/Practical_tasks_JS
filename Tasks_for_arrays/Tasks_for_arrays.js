// 1. CALCULATE THE SUM OF EACH VALUE OF TWO ARRAYS AND ADD THEM TO THIRD ARRAY
// Find maxLength within 2 arrays, loop it and use nulish operator for arr1Value and arr2Value
function calculateArraysSum(arr1, arr2) {
    let arraySumResult = []
    const maxValue = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < maxValue; i++) {
        let arr1Value = arr1[i] ?? 0
        let arr2Value = arr2[i] ?? 0

        arraySumResult.push(arr1Value + arr2Value)
    }
    return arraySumResult
}

console.log(calculateArraysSum([2, 4, 6, 8, 0], [1, 3, 5, 7, 9, 11, 13]))

// [3,  7, 11, 15, 9, 11, 13]







// 2. FLAT AN ARRAY TO REPEAT ALL ELEMENTS
// use flatMap and create a new Array on each element and new array length is 'element' and fill it with 'element'
function arrayFlatMap(arr) {
    const finalArray = arr.flatMap(elem => new Array(elem).fill(elem))
    return finalArray
}

console.log(arrayFlatMap([7, 0, 1]))
//[7,7,7,7,7,7,7,1]







// 3. FLAT NESTED ARRAY
// use method .flat() and Infinity
function flatNestedArray(arr) {
    const finalArray = arr.flat(Infinity)
    return finalArray
}

console.log(flatNestedArray([1, 2, [3, 4, [5, 6]]]))
//[ 1, 2, 3, 4, 5, 6 ]





// 4. FIND MAX VALUE OF ARRAY ELEMENTS
// Use Math.max() and spread operator
function arrMaxNum(arr) {
    const maxValue = Math.max(...arr)
    return maxValue
}
console.log(arrMaxNum([6, 8, 9, 4]))
// 9








// 5. FIND TWO SMALLEST NUMBERS IN ARRAY AND ARRAY SHOUDL BE UNCHANGED
// Use spread operator, sort() and slice()
function findSmallest(arr) {
    const arrSorted = [...arr].sort((a, b) => a - b)
    return arrSorted.slice(0, 2)
}

console.log(findSmallest([6, 4, -6, 8, 2, 1, 5])) //[-6, 1]
console.log(findSmallest([10, 2, 3])) // [2, 3]
console.log(findSmallest([])) // []
console.log(findSmallest([6])) // [6]








// 6. FIND LAST ELEMENT OF ARRAY
// Use length-1
function findLastArrElem(arr) {
    return arr[arr.length - 1]
}

console.log(findLastArrElem([6, 4, 3, 2]))   //2
console.log(findLastArrElem(['hello', 'world', '!']))  //!








// 7. FIND LARGEST ELEMENT IN NESTED ARRAY
// Use .flat() and Math.max()
function findLargestNested(arr) {
    const arrFlat = arr.flat(Infinity)
    const maxValue = Math.max(...arrFlat)
    return maxValue
}

console.log(findLargestNested([1, [2, 3], [4, [5, 6]], 7, [8, 9]]))  // 9











// 8. REMOVE ALL FALSY VALUES FROM ARRAY
// use .filter(Boolean)
function removeFalsyValuesVar1(arr) {
return  arr.filter(Boolean)
}


console.log(removeFalsyValuesVar1([7, "ate", "", false, 9])); // [7, "ate", 9]









// 9. CREATE THIRD ARRAY FROM TWO ARRAYS WHICH VALUES ARE ALTERNATING: 1 ELEMENT FROM FIRST, SECOND ELEMENT FROM SECOND ARRAY, THIRD FROM FIRST, FOURTH FROM SECOND ARRAY ETC
// Find arrays max length, then loop and check if iterator is less than this array length and if yes, add the element to third array
function alternateMerge(arr1, arr2) {
    const arr3 = []

    const maxLength = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            arr3.push(arr1[i])
        }
        if (i < arr2.length) {
            arr3.push(arr2[i])
        }
    }
    return arr3
}

console.log(alternateMerge([1, 3, 5], [2, 4, 6]))
// Output: [1, 2, 3, 4, 5, 6]


console.log(alternateMerge([10, 20], ['a', 'b', 'c', 'd']))
// Output: [10, 'a', 20, 'b', 'c', 'd']

console.log(alternateMerge([10, ""], ['a', 'b', false, 'd']))
// Output: [10, 'a' , '', 'b', false, 'd']









// 10.  GROUP EVEN AND ODDS ELEMENTS FROM ARRAY INTO SEPARATE ARRAYS
// Use forEach() and push to 2 arrays based on condition
function groupArrayNumbers(arr) {
    const arrOdd = []
    const arrEven = []
    arr.forEach(elem => elem%2===0? arrEven.push(elem) : arrOdd.push(elem))
    return {arrOdd, arrEven}
}

console.log(groupArrayNumbers([5, 2, 8, 7, 9, 3, 2, 6]))
//{ arrOdd: [ 5, 7, 9, 3 ], arrEven: [ 2, 8, 2, 6 ] }








// 11. RETURN ARRAY LONGEST STRING ELEMENT
// Use variable and loop
function arrLongestStr(arr) {
    let maxValue = 0
    let updatedValue = ''
    for (let char of arr) {
        if (char.length > maxValue) {
            maxValue = char.length
            updatedValue = char
        }
    }
    return updatedValue
}

console.log(arrLongestStr(["apple", "banana", "cherry", "date", "elderberry"]))
// elderberry









// 12. RETURN ARRAY LONGEST STRING ELEMENT VARIANT 2
// Use .reduce()
function arrLongestStrVar2(arr) {
    const arr2 = arr.reduce((longest, current) => { return longest.length > current.length ? longest : current })
    return arr2
}

console.log(arrLongestStrVar2(["apple", "banana", "cherry", "date", "elderberry"]))
// elderberry








// 13. FIND COMMON DIGITS FROM TWO ARRAYS
// Use filter and check if array elmenent is included in second array, then return spreaded Set
function findCommon(arr1, arr2) {
    const arr3 = arr1.filter(elem => arr2.includes(elem))
    return [...new Set(arr3)]
}

console.log(findCommon([1, 2, 3, 4, 6, 6], [3, 4, 5, 6]))
//[3,4,6]









// 15. RETURN UNION OF TWO ARRAYS WITH UNIQUE ELEMENTS
// Use sey and spread operator
function returnUnion(arr1, arr2) {
    const arr3 = new Set([...arr1, ...arr2])
    return [...arr3]
}

console.log(returnUnion([1, 2, 3, 4, 6], [3, 4, 5, 6]))
//[1, 2, 3, 4, 6, 5]









// 16. RETURN SUM OF NUMBERS OF ARRAY
// Use .reduce() with initial value 0

function returnArrSum(arr) {

    return arr.reduce((prev, curr) => prev+curr, 0)
}

console.log(returnArrSum([1, 2, 3, 4, 5])) //15
console.log(returnArrSum([])) //0










// 17. CHECK IF ARRAY IS SORTED
// Start with 1, and compare element with [i-1], if smaller, return false
function sortedArray(arr){
    if (arr.length===1) return true
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i-1]){
            return false
        }
    }
    return true
}


console.log(sortedArray([4,3,5,8]))  // false
console.log(sortedArray([3])) // true
console.log(sortedArray([11, 7, 9, 3,4,5,8])) // false
console.log(sortedArray([4,5]))  // true









// 18. SORT ARRAY OF OBJECTS BY PRICE FROM MAX TO MIN
// Use spread operator for array, then sort()

function sortArrayOfObjects(arr) {

    const sortedArray = [...arr].sort((a, b) => b.price - a.price)
    return sortedArray
}

console.log(sortArrayOfObjects([
    { name: "item1", price: 10 },
    { name: "item2", price: 5 },
    { name: "item3", price: 20 }
]
))


//  [
//     { name: 'item3', price: 20 },
//     { name: 'item1', price: 10 },
//     { name: 'item2', price: 5 }
//   ]









// 19. RETURN PROPERTIES OF ARRAY OBJECTS BASED ON CONDITION: RETURN NAMES THAT ARE OLDER THAN SOME AGE
// Use filter()
function returnUserNames(arr) {
    const filteredValues = arr.filter(elem => elem.age > 30
    ).map(elem => elem.name)
    return filteredValues
}

console.log(returnUserNames([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "John", age: 45 }
]
))

// [ 'Bob', 'John' ]








// 20. RETURN AVERAGE VALUE FROM ARRAY
// Use .reduce() and Math.round(total/length)
function returnAverageValue(arr) {
    if (arr.length === 0) return 0
    const arrSum = arr.reduce((prev, curr) => prev + curr, 0)
    return Math.round(arrSum/arr.length)
}

console.log(returnAverageValue([6, 5, 8, 3, 5, 7])) //6
console.log(returnAverageValue([0])) //0
console.log(returnAverageValue([1])) //1