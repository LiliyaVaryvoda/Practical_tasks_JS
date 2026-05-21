// 1. Function reference assigning




function sayHey() {
  return "hey"
}


// function reference
const fn = sayHey

console.log(fn()) // hey










// // 2. Function execution assignment

function sayHello() {
  return "hello"
}

// function execution; function runs immediately; fn1 becomes function result (here 'hello'), so 'hello'() causes error because string is not a function
const fnFunc = sayHello()

// console.log(fnFunc())   //  TypeError: fn is not a function
// fnFunc()   //  TypeError: fn is not a function

console.log(fnFunc) //hello









// 3. Function execution assignement where function has no explicit return

function test() {
  console.log("test")
}

// Immediate run
const x = test() //test


// Function has no return, so it implicitly returns undefined so x=undefined as const x = test() means function runs and x becomes resulf of function execution
console.log(x) // undefined


// As x = undefined, then calling undefined() results in error
// console.log(x()) // TypeError: x is not a function











// 4. Object method reference assigning



const obj = {
  name: "John",
  greet() {
    return this.name
  }
}


// 4.1  Function reference assignement
// 'this' is undefined because function is detached from its object
const objFn = obj.greet
console.log(objFn()) // undefined
console.log(objFn) // [Function: greet]




// 4.2 Function execution assignemnt
const objFn1 = obj.greet()

// objFn1 becomes the result of function run so obj.greet() returns this.name as 'John' and objFn1 = "John"; calling objFn1() would throw TypeError because it's not a function
//console.log(objFn1())  // TypeError: objFn1 is not a function

//objFn1 becomes the result of function run so obj.greet() returns this.name as 'John'
console.log(objFn1)  // John



// 4.3 Binding
// With bind, this context is binded to variable
const objFn2 = obj.greet.bind(obj)
console.log(objFn2()) // John










// 5. Closures

// Inner function has access to outer function variables 
function outer() {
  let count = 0

  return function () {
    count++
    return count
  }
}

// Here fn = function + access to count
const fnClosure = outer()

// Uses the same count 
console.log(fnClosure()) // 1
console.log(fnClosure()) // 2


// Function fun with new count each run
console.log(outer()()) // 1
console.log(outer()()) // 1









// 6. Functions and global variables

// Global variables are shared accross al functions calls


let count = 0;


function increment() {
 count += 1;
 return count;
}



console.log(increment()) // 1
console.log(count) // 1
console.log(increment()) // 2
console.log(count) // 2








// 7. Lexical scope
// FUnction has access to variables where this function was DEFINED


let xVariable = 1
function test() {
  console.log(xVariable)
}
function wrapper() {
  let xVariable = 2
  test()
}
wrapper() //1








// 8. Closure and state
// Closure keeps the state only if the function that creates it is called once

function outer1() {
  let x = 1;

  return function () {
    x++;
    console.log(x);
  };
}

const fn1 = outer1()

fn1(); // 2
fn1(); // 3
fn1(); // 4


// -----------------
function outer2() {
  let x = 1;

  return function () {
    x++;
    console.log(x);
  };
}

const fn2 = outer2

fn2()(); // 2
fn2()(); // 2
fn2()(); // 2

