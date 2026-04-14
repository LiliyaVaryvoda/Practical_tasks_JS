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