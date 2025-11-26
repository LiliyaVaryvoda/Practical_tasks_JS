// 1. DIVIDE ARRAY INTO 2 PARTS, FIRST IS LONGER IF ODD

function divideArrayIntoParts(arr) {
    if (arr.length === 0) return {arr1: [], arr2: []}
    const middleValue = Math.ceil(arr.length / 2)
    const arr1 = arr.slice(0, middleValue)
    const arr2 = arr.slice(middleValue)
    return { arr1, arr2 }
}

console.log(divideArrayIntoParts([6, 5, 8, 3, 5, 7, 9, 0, 6]))  // { arr1: [ 6, 5, 8, 3, 5 ], arr2: [ 7, 9, 0, 6 ] }
console.log(divideArrayIntoParts([6, 5, 8, 3, 5, 7, 9, 0])) // { arr1: [ 6, 5, 8, 3 ], arr2: [ 5, 7, 9, 0 ] }
console.log(divideArrayIntoParts([0])) // { arr1: [ 0 ], arr2: [] }








// 2. RETURN LARGEST DIFFERENCE BETWEEN TWO NUMBERS IN ARRAY

function returnLargestDifference(arr) {
    return Math.max(...arr) - Math.min(...arr)
}

console.log(returnLargestDifference([2, 9, 1, 5]))  // 8  (9 - 1)
console.log(returnLargestDifference([-10, 0, 10]))  // 20 (10 - (-10))
console.log(returnLargestDifference([5]))           // 0  (only one number)
console.log(returnLargestDifference([6, 1]))           // 5








// 3. COUNT TRUTHYU AND FALSY VALUES IN ARRAY

function countTruthyFaslyValues(arr) {
    const truthyValuesArr = arr.filter(elem => Boolean(elem))
    return { truthyValuesArr: truthyValuesArr.length, falsyValuesArr: arr.length - truthyValuesArr.length }
}

console.log(countTruthyFaslyValues([0, 1, "", "hello", null, undefined, [], {}, false, true, NaN, "0"]))
//{ truthyValuesArr: 6, falsyValuesArr: 6 }








//  4. MOVE NUMBER 0 TO THE END OR ARRAY

function moveDigitsInArray(arr) {
    const arr1 = arr.filter(elem => elem !== 0)
    const arr2 = arr.filter(elem => elem === 0)
    return [...arr1, ...arr2]
}

console.log(moveDigitsInArray([0, 6, 3, 'hello', 0, 5, 'world']))  //[ 6, 3, 'hello', 5, 'world', 0, 0 ]








// 5. FIND PEAK ELEMENTS IN ARRAY

function returnPeakElements(arr) {
    let peakValues = []
    if (arr.length === 0) return []
    if (arr.length === 1 && typeof arr[0] === 'number') return arr
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') continue
        let prevValue = (i === 0 || typeof arr[i - 1] !== 'number') ? -Infinity : arr[i - 1]
        let nextValue = (i === arr.length - 1 || typeof arr[i + 1] !== 'number') ? -Infinity : arr[i + 1]
        if (arr[i] > prevValue && arr[i] > nextValue) peakValues.push(arr[i])
    }
    return peakValues
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










// 6. FIND THE MAJORITY ELEMENT IN ARRAY

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










// 7. FIND COMMON PREFIX IN ARRAY OF WORDS

function findCommonPrefix(arr) {

    let commonPrefix = ''
    let firstWord = arr[0]

    for (let char = 0; char < firstWord.length; char++) {

        for (let word = 1; word < arr.length; word++) {

            if (firstWord[char] !== arr[word][char]) return commonPrefix || -1
        }
        commonPrefix += firstWord[char]
    }
    return commonPrefix
}

console.log(findCommonPrefix(["flower", "flow", "flight"])) // fl
console.log(findCommonPrefix(["dog", "racecar", "car"])) // -1
console.log(findCommonPrefix(["dog", "dog", "dog"])) //dog








// 8. FIND MISSING NUMBER FROM 1 TO N IN ARRAY

function findMissingNumber(arr, num){
    const expectedSum =  num*(num+1)/2
    const actualSum = arr.reduce((acc, current) => acc+ current, 0)
    return expectedSum - actualSum

}

console.log(findMissingNumber([1, 3, 4, 6, 2, 7, 8, 9], 9)) //5
console.log(findMissingNumber([1, 2, 4, 5], 5)) // 3








// 9. FIND INDEX OF ELEMENT IN ARRAY

function findIndexOfElemInArr(arr, elem){
    return arr.findIndex(e => e===elem)

}

console.log(findIndexOfElemInArr(['a', 'b', 'c', 'd', 'e', 'f'], 'c')) //2
console.log(findIndexOfElemInArr(['a', 'b', 'c', 'd', 'e', 'f'], 'n')) //-1









// 10. FIND MINIMUM NUMBER IN ARRAY OF OBJECTS

function findMinimumNumInArr(arr){
    let minMum = Math.min(...arr.map(elem => elem.n))
    let objctMin = arr.find(elem => elem.n === minMum)
    return objctMin
}

console.log(findMinimumNumInArr([{ n: 6 }, { n: 2 }, {n:5}])) //2









// 11. REMOVE SPECIFIC VALUES IN-PLACE

function removeValueInPlace(arr, num){
    for(let i = arr.length-1; i>=0; i--){
        console.log(arr[i])
        if (arr[i] === num){
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(removeValueInPlace([3, 1, 2, 3, 4, 3], 3)) // [ 1, 2, 4 ]











// 12. RETURN NEW ARRAY WITH SQUARED NUMBERS

function squaredNumArr(arr){
    const arr2 = arr.map(elem => Math.pow(elem, 2))
    return arr2
}

console.log(squaredNumArr([4,6,7,8])) // [ 16, 36, 49, 64 ]