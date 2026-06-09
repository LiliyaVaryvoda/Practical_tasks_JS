// 1. Find equilibrium index
// Find total sum, then start leftSum with 0 and loop through array
// Right sum is total sum - left sum - currect element
// If right and left sum are equal, then current is equilibrium
// If no, continue with iteration and left sum is +=current element, still no at the end, return -1/false
function equilibrumIndex(arr){
    let totalVSum = arr.reduce((acc, curr) => acc+curr, 0)
    let leftSum = 0
    for (let i = 0; i < arr.length; i++){
        let rightSum = totalVSum - leftSum - arr[i]
        if (rightSum === leftSum) {return arr[i]}
        leftSum+=arr[i]
    }
    return -1
}


console.log(equilibrumIndex([1,3,5,2,2])) //5
console.log(equilibrumIndex([1,2,3])) //-1










// 2. Rotate an array left/right
// It means to move particular number of elements from the end to the beginning if rotate right
// Find remainder (use %) from number of elements to array length if case number is bigger and it will be aka few circles
// Use .slice() to have 2 arrays, first from 0 to this remaining, second from remaining(aka number of elements) till the end of array
function rotateArrRight(arr, num){
    const remaining = num % arr.length
    console.log(remaining)
    let updarr1 = arr.slice(0, arr.length-remaining)
    let updarr2 = arr.slice(arr.length-remaining)
    return [...updarr2, ...updarr1]}


console.log(rotateArrRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArrRight([1, 2, 3, 4, 5], 9)); // [ 2, 3, 4, 5, 1 ] as remainder 4











// 3. Check if array is palindrome
// Loop with 2 variables, first starts from array beginning, second from array end and till first is less than second, compare if array elements are equal

function checkArrPallindrom(arr){
    for (let i = 0, j = arr.length-1; i<j; i++, j--){
        if (arr[i] !== arr[j]){return false}
    }
    return true
}



console.log(checkArrPallindrom([1,2,3,2,1])) // true
console.log(checkArrPallindrom([1,2,3,4,5])) // false







// 4. Return the sum of all digits of array elements

function returnSumOfDigitsInArr(arr) {
    return arr.join('').split('').reduce((acc, cur) => acc + Number(cur), 0)
}


console.log(returnSum([22, 555, 67]))








// 5. Max subarray/ Kadane Algorithm


function arrMaxSubarray(arr){
    let currentSum = arr[0]
    let maxSum = arr[0]

    let start = 0
    let end = 0
    let tempStart = 0

    for (let i = 1; i < arr.length; i++){

        if (arr[i] > currentSum + arr[i]){
            currentSum = arr[i]
            tempStart = i
        } else {
            currentSum = currentSum + arr[i]
        }

        if (currentSum > maxSum){
            maxSum = currentSum
            start = tempStart
            end = i
        }
    }

    return {
        maxSum,
        subarray: arr.slice(start, end + 1)
    }
}


    console.log(arrMaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))











// 6. Find common prefix


function findCommon(arr){
    if (arr.length <2) {return -1}
    let common = ''
    const firstValue = String(arr[0])

    for (let char = 0; char< firstValue.length; char++){
        
        const currentChar = firstValue[char]

        for (let word = 1; word< arr.length; word++){

            const currentWord= String(arr[word])

            if (currentWord[char] !== currentChar){
                return common || -1
            }
        }
        common+=currentChar
    }
    return common
}

console.log(findCommon([12345, 1234,1234567,12345] ))//1234
console.log(findCommon([12, 45, 67, 890] ))//-1
console.log(findCommon([12] ))//-1
console.log(findCommon([] ))//-1
console.log(findCommon([12, 11] ))//1









// 7. Find missing number in sorted array

function checkMissing(arr){
    if (arr.length<2){return -1}
    for (let i = 0 ; i< arr.length-1; i++){
        if (arr[i]+1 !== arr[i+1]) {
            return arr[i]+1
        }
    }
    return -1
}

console.log(checkMissing([6,7,9])) //8
console.log(checkMissing([1,3])) //2
console.log(checkMissing([1])) //-1









// 8. Find 2 numbers whose sum equals the target

function targetSumNumbers(arr, target){
    const map = new Map()
    for (let i =0 ; i<arr.length; i++){
        const neededNumber = target - arr[i]
        if (map.has(neededNumber)){
            return [map.get(neededNumber), i]
        }
        else{
            map.set(arr[i], i)
        }
    }
    return -1
}

console.log(targetSumNumbers([2,7,11,15], 9)) // [1, 0]
console.log(targetSumNumbers([2,7,11,15], 1)) // -1











// 9. Find second largest number in array

function findSecondLargest(arr){
    if (arr.length < 2) {return NaN}
    let firstLargest = -Infinity
    let secondLargest = - Infinity
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]

        }
        else if (arr[i] > secondLargest && arr[i]!==firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest === -Infinity? NaN : secondLargest
}

console.log(findSecondLargest([10, 5, 20, 8])) //10
console.log(findSecondLargest([10, 5])) // 5
console.log(findSecondLargest([10])) //NaN
console.log(findSecondLargest([20, 20, 10])) //10
console.log(findSecondLargest([20, 20])) //NaN
