// 1. WHY THIS FUNCTION RETURN UNEXPECTED VALUE : COMPARE TWO OBJECTS LIKE {} == {} ALWAYS RETURN FALSE


function greet(person) {
    if (person == { name: 'amy' }) {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}


console.log(greet({ name: 'amy' })) // hey arnold

// Correct
function greetCorrected(person) {
    if (person.name === 'amy') {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}

console.log(greetCorrected({ name: 'amy' })) // 'hey amy'










// 2. OBJECT REASSIGNMENT AND MUTATION
// The curly braces { ... } always create a new object in memory so it is reassignment and new object

let aObj = { num: 1 };
let bObj = aObj;
aObj = { num: 2 };


console.log(bObj.num) // 1










// 3. HOW TO PRESERVE IMMUTABILITY : JSON METHODS TO CREATE DEEP COPY

const heroes = [
    { name: "Wolverine", family: "Marvel", isEvil: false },
    { name: "Deadpool", family: "Marvel", isEvil: false },
    { name: "Magneto", family: "Marvel", isEvil: true }
];


function createNewHeroes(arr) {
    const updatedHeroes = JSON.parse(JSON.stringify(arr))
    return updatedHeroes.map((elem) => { elem.name = elem.name.toUpperCase(); return elem })
}


console.log(createNewHeroes(heroes));

//    [
//     { name: 'WOLVERINE', family: 'Marvel', isEvil: false },
//     { name: 'DEADPOOL', family: 'Marvel', isEvil: false },
//     { name: 'MAGNETO', family: 'Marvel', isEvil: true }
//   ]


console.log(heroes);
// [
//     { name: 'Wolverine', family: 'Marvel', isEvil: false },
//     { name: 'Deadpool', family: 'Marvel', isEvil: false },
//     { name: 'Magneto', family: 'Marvel', isEvil: true }
// ]









// 4. COMPARE NESTED OBJECTS

function nestedObjComparison(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(nestedObjComparison({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true











// 5. COMPARE OBJECT WITH NOT SORTED KEYS

function deepEqualCompare(obj1, obj2) {


    if (obj1 === obj2) return true;


    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }
    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) { return false }
    for (let key of obj1Keys) {
        if (!obj2Keys.includes(key)) {
            return false
        }
        if (!deepEqualCompare(obj1[key], obj2[key])) { return false }

    }
    return true

}

console.log(deepEqualCompare({ a: 1, b: { c: 2 }, d: 3 }, { d: 3, b: { c: 2 }, a: 1 })) //true
console.log(deepEqualCompare({ e: 1, b: { c: 2 }, d: 3 }, { d: 4, b: { c: 2 }, a: 1 })) //false
console.log(deepEqualCompare({ e: 1, b: { c: 2 }, d: 3 }, { d: 4, b: { c: 2 } })) //false
console.log(deepEqualCompare('', null)) //false










// 6. INVERT OBJECT KEY AND VALUE

function returnInvertedObj(obj) {

    let invertedObj = {}
    const objEntries = Object.entries(obj)

    for (let [k, v] of objEntries) {
        let invertedValue
        if (v === null) continue
        try {
            invertedValue = JSON.stringify(v)
        } catch {
            invertedValue = undefined
        }
        if (typeof invertedValue !== 'string') { continue }
        else {
            invertedObj[invertedValue] = k
        }

    }
    return invertedObj
}

console.log(returnInvertedObj({
    a: 1,
    b: undefined,
    c: () => { },
    d: Symbol("x"),
    e: { f: 4 },
    f: BigInt(10),
    g: null,
    h: [1, 2]
}
))

//{ '1': 'a', '{"f":4}': 'e', '[1,2]': 'h' }











// 7. FIND MAX VALUE IN OBJECT

function findMaxValueInObj(obj) {
    let stack = [obj]
    let allValues = []

    while(stack.length > 0){

        const current = stack.pop()

        for (let [key, value] of Object.entries(current)){
            if (value!==null && typeof value === 'object'){
                stack.push(value)
            }

            else{
                allValues.push(Number(value))
            }
        }

    }
    const allValuesNumbers = allValues.filter(elem => typeof elem === 'number' && isFinite(elem))
    const maxValue=  Math.max(...allValuesNumbers)
    return isFinite(maxValue) ? maxValue : -1


}

console.log(findMaxValueInObj({
    a: 10,
    b: 25,
    c: -3,
    d: 0,
    e: 42,
    f: 3.14,
    g: "hello",
    h: 7,
    i: 100,
    j: true,
    k: { l: 600 },
    m:'900',
    n: { o: { p: 1000 } }
})) // 1000

console.log(findMaxValueInObj({a:'b', c:'d'}))  // -1









// 8. ADD PROPERTY TO THE OBJECT WITHOUT MODIFYING THE OBJECT ITSELF

function addProperty(obj, key , value){
    const copy = JSON.parse(JSON.stringify(obj))
    copy[key] = value
    return copy
}

const user1 = { name: "Alice" };
const user2 = addProperty(user1, 'age', 30);

console.log(user1); // { name: "Alice" }
console.log(user2); // { name: "Alice", age: 30 }