// 1. DIVIDE ARRAY INTO 2 PARTS, FIRST IS LONGER IF ODD
// Find Math.ceil(middleValue), then .slice()
function divideArrayIntoParts(arr) {
    if (arr.length === 0) return { arr1: [], arr2: [] }
    const middleValue = Math.ceil(arr.length / 2)
    const arr1 = arr.slice(0, middleValue)
    const arr2 = arr.slice(middleValue)
    return { arr1, arr2 }
}

console.log(divideArrayIntoParts([6, 5, 8, 3, 5, 7, 9, 0, 6]))  // { arr1: [ 6, 5, 8, 3, 5 ], arr2: [ 7, 9, 0, 6 ] }
console.log(divideArrayIntoParts([6, 5, 8, 3, 5, 7, 9, 0])) // { arr1: [ 6, 5, 8, 3 ], arr2: [ 5, 7, 9, 0 ] }
console.log(divideArrayIntoParts([0])) // { arr1: [ 0 ], arr2: [] }









// 2. RETURN LARGEST DIFFERENCE BETWEEN TWO NUMBERS IN ARRAY
// Math.max - Math.min
function returnLargestDifference(arr) {
    return Math.max(...arr) - Math.min(...arr)
}

console.log(returnLargestDifference([2, 9, 1, 5]))  // 8  (9 - 1)
console.log(returnLargestDifference([-10, 0, 10]))  // 20 (10 - (-10))
console.log(returnLargestDifference([5]))           // 0  (only one number)
console.log(returnLargestDifference([6, 1]))           // 5









// 3. COUNT TRUTHY AND FALSY VALUES IN ARRAY
// .filter(Boolean)
function countTruthyFaslyValues(arr) {
    const truthyValuesArr = arr.filter(elem => Boolean(elem))
    return { truthyValuesArr: truthyValuesArr.length, falsyValuesArr: arr.length - truthyValuesArr.length }
}

console.log(countTruthyFaslyValues([0, 1, "", "hello", null, undefined, [], {}, false, true, NaN, "0"]))
//{ truthyValuesArr: 6, falsyValuesArr: 6 }










//  4. MOVE NUMBER 0 TO THE END OR ARRAY
// Filter arrays and then combine them
function moveDigitsInArray(arr) {
    const arr1 = arr.filter(elem => elem !== 0)
    const arr2 = arr.filter(elem => elem === 0)
    return [...arr1, ...arr2]
}

console.log(moveDigitsInArray([0, 6, 3, 'hello', 0, 5, 'world']))  //[ 6, 3, 'hello', 5, 'world', 0, 0 ]











//  5. MOVE NUMBER 0 TO THE END OR ARRAY 
// VARIANT 2
// Loop array and swap places by moving current elements at the beginning and those at the beginning to the current by swiping [,] = [,] and incrementing index
function moveDigitsInArray(arr) {
    let index = 0
    for (let i = 0 ; i< arr.length; i++){
        if (arr[i] !== 0){
            [[arr[i], arr[index]] = [arr[index], arr[i]]]
            index++
        }
    }
    return arr
}

console.log(moveDigitsInArray([0, 6, 3, 'hello', 0, 5, 'world']))  //[ 6, 3, 'hello', 5, 'world', 0, 0 ]










// 6. FIND PEAK ELEMENTS IN ARRAY
// Loop through array, skip not numbers,  select previous and next values, if they are numbers, use them, if not, use -Infinity and compare
function returnPeakElements(arr) {
    let peakElements = []
    for (let i = 0 ; i < arr.length; i++){
        if (typeof(arr[i]) !== "number") continue
        let prevElem = arr[i-1]
        prevElem = typeof(prevElem)==="number"?  arr[i-1] : -Infinity
        let nextElem = arr[i+1]
        nextElem= typeof (nextElem) === "number"? arr[i+1]: -Infinity
        if (arr[i] > prevElem&& arr[i] > nextElem){
            peakElements.push(arr[i])
        }
    }
    return peakElements
}

console.log(returnPeakElements([1, 3, 2, 5, 4])) // [ 3, 5 ]
console.log(returnPeakElements([10, 5, 2])) // [10]
console.log(returnPeakElements([10, 5, 2, 20])) // [10, 20]
console.log(returnPeakElements([10])) // [10]
console.log(returnPeakElements(['hello'])) // []
console.log(returnPeakElements(['hello', 1])) // [1]
console.log(returnPeakElements(['2', '1'])) // []
console.log(returnPeakElements([])) // []
console.log(returnPeakElements([1, 'hello', 5, 3, null, 10, 2])) // [1, 5, 10]









// 7. FIND THE MAJORITY ELEMENT IN ARRAY
// Use for of loop and Map(); then check if occurencies > array length/2
function findMajorityElement(arr) {
    let mapOccurencies = new Map()
    for (let elem of arr) {
        if (mapOccurencies.has(elem)) {
            mapOccurencies.set(elem, mapOccurencies.get(elem) + 1)
        }
        else {
            mapOccurencies.set(elem, 1)
        }
    }
    for ([key, value] of mapOccurencies.entries()) {
        if (value > arr.length / 2) {
            return key
        }
    }
    return 'No majority element'
}

console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 3])) // 3
console.log(findMajorityElement([1, 2, 3, 4])) // No majority element










// 8. FIND COMMON PREFIX IN ARRAY OF WORDS
// Loop through first word, then loop though array words, if there is mismatch return prefix or -1, if not mismatches, after looping words add prefix to variable, return variable at the end of function
function findCommonPrefix(arr) {
    const firstWord = arr[0]
    let commonPrefix = ''
    for (let i = 0 ; i< firstWord.length; i++){
        for (let word = 1; word < arr.length; word++){
            if (!arr[word][i] || arr[word][i] !== firstWord[i]) {return commonPrefix || -1}
        }
        commonPrefix+=firstWord[i]
    }
return commonPrefix
}

console.log(findCommonPrefix(["flower", "flow", "flight"])) // fl
console.log(findCommonPrefix(["dog", "racecar", "car"])) // -1
console.log(findCommonPrefix(["dog", "dog", "dog"])) //dog








// 9. FIND MISSING NUMBER FROM 1 TO N IN ARRAY
// Create a set from array, loop through array from 1 to n and check if set has it, if no, it is missing
function findMissingNumber(arr, num) {
    let missingNums = []
    const uniqueArray = new Set(arr)
    for (let i = 1; i<=num; i++){
        if (!uniqueArray.has(i)){
            missingNums.push(i)
        }
    }
    return missingNums
}

console.log(findMissingNumber([1, 3, 4, 6, 2, 7, 8, 9], 9)) //5
console.log(findMissingNumber([1, 2, 4, 5], 5)) // 3
console.log(findMissingNumber([1, 2, 4, 5, 6, 9], 9)) // 3, 7 , 8










// 10. FIND INDEX OF ELEMENT IN ARRAY
// Use .findIndex() ; this function expects callback (elem => elem === elementSearch)
function findIndexOfElemInArr(arr, elem) {
    return arr.findIndex(e => e === elem)

}

console.log(findIndexOfElemInArr(['a', 'b', 'c', 'd', 'e', 'f'], 'c')) //2
console.log(findIndexOfElemInArr(['a', 'b', 'c', 'd', 'e', 'f'], 'n')) //-1










// 11. FIND MINIMUM NUMBER IN ARRAY OF OBJECTS
// use flatMap() and filter() by type and Math.min()
function findMinimumNumInArr(arr) {
    const arrValues = arr.flatMap(elem => Object.values(elem).filter(elem => typeof elem === 'number'))
    return Math.min(...arrValues)
}

console.log(findMinimumNumInArr([{ n: 6 }, { c: 2 }, { n: 5 }, {k:'hello'}])) //2









// 12. REMOVE SPECIFIC VALUES IN-PLACE
// Loop through array backwards, then use .splice(index, deleteCount)
function removeValueInPlace(arr, num) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === num) {
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(removeValueInPlace([3, 1, 2, 3, 4, 3], 3)) // [ 1, 2, 4 ]











// 13. RETURN NEW ARRAY WITH SQUARED NUMBERS
// Use .map()
function squaredNumArr(arr) {
    const arr2 = arr.map(elem => Math.pow(elem, 2))
    return arr2
}

console.log(squaredNumArr([4, 6, 7, 8])) // [ 16, 36, 49, 64 ]










// 14. PRINT ALL PAIRS IN ARRAY
// Use outer loop for first value start from 0, and inner loop for second value start from outer increment + 1; then push both values
function returnPairsInArray(arr) {
    let pairs = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]])
        }
    }
    return pairs
}

console.log(returnPairsInArray([1, 2, 3]))   // [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]












// 15. CREATE ARRAY OF OBJECT KEY-VALUE PAIRS
// Use Object.entries()
function returnKeyValuePairs(obj) {
    const objEntries = Object.entries(obj)
    return objEntries
}

console.log(returnKeyValuePairs({ a: 1, b: 2, c: 3, d: null })) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', null ] ]













// 16. COUNT NUMBERS FREQUENCY IN ARRAY
// .filter() by Number.isFinite()
function countArrNumbersFrequency(arr){
return arr.filter(elem => Number.isFinite(elem))
}

console.log(countArrNumbersFrequency([
    1, 2, 3, 4, 5, 6,
    11.5, -12, 0, Infinity, NaN,
    "hello", true,
    null, undefined,
    [1,2], {x:1}, () => 42, Symbol("s"), BigInt(9000)
  ]
  ))
//   [
//   1, 2,    3,   4,
//   5, 6, 11.5, -12,
//   0
// ]










// 17. CREATE NEW ARRAY WITH ELEMENTS DOUBLED
// use .map() and check if type if number, if yes, return doubled, if no, return element
function doubleArrElements(arr){
    const arr2 = arr.map(elem => {
        return typeof elem === 'number' ?
            elem*2 : elem
        
    })
    return arr2
}

console.log(doubleArrElements([1, 2, "hello", null, 3])) // [ 2, 4, 'hello', null, 6 ]











// 18. CHUNK ARRAY INTO SMALLER ARRAYS
// LOop through array, then increment i with stepSize, in loop use .slice() with iterator as start and iterator with stepSize as end 
function chunkArray(arr, size){
    let updatedArr = []
    for (let i = 0 ; i < arr.length; i = i+size){
        updatedArr.push(arr.slice(i, i+size))
    }
    return updatedArr
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [[1, 2, 3], [4, 5, 6], [7]]










// 19. SORT ARRAY OF OBJECTS BY KEY
// Use sort() and localeCompare() for comparing words 
function sortArrofObj(arr){
    const filteredArrByNames = [...arr].sort((a,b) => a.name.localeCompare(b.name))
    const filteredArrByAge = [...arr].sort((a,b) => a.age - b.age)

    return [filteredArrByNames, filteredArrByAge]
}

console.log(sortArrofObj([
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charlie", age: 25 }
  ]))




//   [
//     { id: 1, name: 'Alice', age: 28 },
//     { id: 2, name: 'Bob', age: 32 },
//     { id: 3, name: 'Charlie', age: 25 }  // by name
//   ],
//   [
//     { id: 3, name: 'Charlie', age: 25 },
//     { id: 1, name: 'Alice', age: 28 },
//     { id: 2, name: 'Bob', age: 32 }   // by age
//   ]
// ]