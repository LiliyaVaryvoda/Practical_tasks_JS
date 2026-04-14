// // 1. Declare variables and their types


// let firstName : string = 'Alex'
// let age: number = 50
// let hasCat: boolean = false
// //console.log(firstName) //Alex





// // 2. What this code will return?


// // let variableName: number = 'g'
// // console.log(variableName)  // Type 'string' is not assignable to type 'number'.








// // 3. Extends vs Implements in Typescript
// // Extends allows class or interface to inherit properties and methods from another class or interface


// // Extends example

// class TestCase {
//     constructor(public name:string, public status: "Pass" | "Fail") {}
//     returnStatus(){
//         console.log(`${this.name} : ${this.status}`)
//     }

// }

// class AutomatedTestCase extends TestCase {
//     constructor(name:string, status:"Pass" | "Fail", public script: string) {
//         super (name, status)
//     }

//     runScript(){
//         console.log(`Running ${this.script} for ${this.name}`)
//     }
// }


// const test = new AutomatedTestCase('Verify login', 'Pass', 'This is script')
// test.returnStatus() // Verify login : Pass
// test.runScript() // Running This is script for Verify login




// // Implements is used to define structure and types and another interface or class can be shaped using implement


// interface TestCaseID {
//     name: string;
//     status: 'Pass' | 'Fail';
//     returnStatus() : void
// }

// class ManualTestCase implements TestCaseID {
//     constructor(public name: string, public status: 'Pass' | 'Fail'){}
//         returnStatus(){
//             console.log(`${this.name} has ${this.status}`)
//         }
// }


// const manualTestCaseImplementation = new ManualTestCase('ID32', 'Pass')
// manualTestCaseImplementation.returnStatus() // ID32 has Pass







// 4. Types setting

function greet(name:string):string{
    return `Hello ${name}`
}

console.log(greet('Alex'))







// 5. Union type
let value : string|number

value = 50
value = 'Hello'
// value = false // Type 'boolean' is not assignable to type 'string | number'.






// 6. Intersection type

interface Human{
    name : string
}

interface Student{
    studentID : number
}


const student1: Human & Student ={
    name: 'Alice Red',
    studentID : 155
}

console.log(student1.name) // Alice Red