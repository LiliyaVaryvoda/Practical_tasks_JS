// 1. Declare variables and their types


let firstName : string = 'Alex'
let age: number = 50
let hasCat: boolean = false
console.log(firstName) //Alex








// 2. Declare type using Type alias

type Color = 'red' | 'green' | 'blue';

const redColor : Color = 'red'
console.log(redColor) // red







// 3. Declare type using interface Interface

interface Subject {
    subject: 'math' | 'physics'
}


const subject1: Subject = {
    subject: 'math'
}

console.log(subject1) // { subject: 'math' }










// 4. What this code will return?

// let variableName: number = 'g'  // Type 'string' is not assignable to type 'number'.  ERROR before compiling because of type check














// 5. Extends vs Implements in Typescript
// Extends allows class or interface to inherit properties and methods from another class or interface


// Extends example

class TestCase {
    constructor(public name:string, public status: "Pass" | "Fail") {}
    returnStatus(){
        console.log(`${this.name} : ${this.status}`)
    }

}

class AutomatedTestCase extends TestCase {
    constructor(name:string, status:"Pass" | "Fail", public script: string) {
        super (name, status)
    }

    runScript(){
        console.log(`Running ${this.script} for ${this.name}`)
    }
}


const test1 = new AutomatedTestCase('Verify login', 'Pass', 'This is script')
test1.returnStatus() // Verify login : Pass
test1.runScript() // Running This is script for Verify login




// Implements is used to define structure and types and another interface or class can be shaped using implement


interface TestCaseID {
    name: string;
    status: 'Pass' | 'Fail';
    returnStatus() : void
}

class ManualTestCase implements TestCaseID {
    constructor(public name: string, public status: 'Pass' | 'Fail'){}
        returnStatus(){
            console.log(`${this.name} has ${this.status}`)
        }
}


const manualTestCaseImplementation = new ManualTestCase('ID32', 'Pass')
manualTestCaseImplementation.returnStatus() // ID32 has Pass







// 6. Types setting

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










// 7. Generic type

function getValue<T>(value : T): T {
    return value
}


const valueGeneric = getValue(5)
//console.log(valueGeneric.toUppercase()) // Property 'toUppercase' does not exist on type '5'.




// Type any

function firstElement(arr: any[]): any {
  return arr[0];
}

const val = firstElement([1, 2, 3]);
//val.toUpperCase() // no error
// ERROR WHEN RUN -> TypeError: val.toUpperCase is not a function, NOT CATCHED BEFORE RUNNING










// 8. Type merging

type User = {name: string}
//type User = {age:number}  // Duplicate identifier 'User'.








// 9. Interface merging
interface Teacher {
    name: string
}


interface Teacher {
    id: number
}


const techer1 : Teacher = {
    name: 'Anna',
    id : 55
}

console.log(techer1)  // { name: 'Anna', id: 55 }