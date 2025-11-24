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
    return updatedHeroes.map((elem) => {elem.name = elem.name.toUpperCase(); return elem})
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