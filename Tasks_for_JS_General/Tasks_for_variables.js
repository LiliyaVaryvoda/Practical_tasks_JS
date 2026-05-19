// 1. Var
// Var variable is not block scoped - it is outside the block for
// all for loop ierations have the same var i
// it is async
// but first, for loop is going, i = 3, iteration ends
// then async console is started and each callbacks prints var i which is 3 at the end of loop



for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("var:", i);
    }, 100);
   }
   
//    var: 3
//    var: 3
//    var: 3


// WITHOUT ASYNC, WORKS AS EXPECTED
for (var i = 0; i < 3; i++) {
    console.log(i)
   }

//    0
//    1
//    2












//2.  LET VARIABLE
// It is block scoped so it creates a new variable for each iteration, not a single shared one
// Var is shared so final value is printed for async; with let there are separate variables




for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("let:", i);
    }, 100);
   }
   
   
//    let: 0
//    let: 1
//    let: 2
   
   
   
   
   for (let i = 0; i < 3; i++) {
    console.log(i)
   }
   
//    0
//    1
//    2
   







// 3. CONST VARIABLE
// It cannot be reassigned aka i++ (first its 0, then 1 etc)

// for (const i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log("const:", i);
//     }, 100);
//    }
   
   
//TypeError: Assignment to constant variable.
   
   
   
   
//    for (const i = 0; i < 3; i++) {
//     console.log(i)
//    }

//TypeError: Assignment to constant variable.



// There is no increment so const num will have new for each iteration
const arrayOfNumbers = [1, 2, 3, 4, 5]
for (const num of arrayOfNumbers) {
    console.log(num) // 1 2 3 4 5 
}











// 4. Variables shadowing : inner variables have higher proprity than outer variables


let x1 = 10;

function test(x1) {  // <-- parameter shadows outer x
    console.log(x1);
}

test(99); // prints 99, not 10











// 5. WHAT IS VARIABLE VALUE AT THE TIME OF EXECUTION

let x = 0;
function f() { console.log(x); }
x = 2;
f() //2








// 6. Hoisting


console.log(a) //undefined
var a = 5



// console.log(b)
// Reference error
let b = 5 








// 7. Const mutation
// Const cannot be reassigned but can be mutated


const obj = { name: 'John' }
obj.name = 'Mike'
console.log(obj.name) // Mike








// 8. TDZ
// If a variable is declared in a scope, JS will NEVER look outside for it


let xVariable = 10

function test() {
  console.log(xVariable)
  let xVariable = 20
}

test() // Reference error 










// 9 . Shadowing
// JS always looks in the closest scope first

let a = 1

function test() {
  let a = 2
  console.log(a)
}

test() // 2
console.log(a)  // 1










// 10. Block scope
// Var is function scoped, let is block scoped 


if (true) {
  var a = 10
}
console.log(a) //10



if (true) {
  let b = 10
}
// console.log(b) // Reference error










// 11. Function scope


function test() {
  if (true) {
    var x = 5
  }
  console.log(x)
}

test() //5 














// 12. Reassignment to a constant variable
const a = 10
// a = 20   // Type error: Assignment to constant variable.








// 13. Var keyword in loop
// Var is function scope so this variable is shared here
// Loop order is init, condition, body, increment
// So var is 0 as initialized, then insode loop var becomes 10, then increment makes it 11 and loop ends as condtion fails
for (var i = 0; i < 3; i++) {
  var i = 10
}
console.log(i) // 11









// 13. Redeclare let variable in different scopes
// let i = 10 is a new variable in the {}

for (let i = 0; i < 3; i++) {
  let i = 10
  console.log(i)  // 10 10 10
}








// 14. Prining var value outside of the loop
// Var is function scope, so it is redeclared
// var in loop starts from 0, then becomes 1, 2, 3 and loop ends
// Outside of the loop final var value is printed

var i = 5
for (var i = 0; i < 3; i++) {
}
console.log(i) // 3









// 15. Prining let value outside of the loop
// Variable shadowing

// GLobal variable is printed
let i = 5
for (let i = 0; i < 3; i++) {

}
console.log(i) //5 









// 16. Var is function scoped so can be accessed outside the block
// The final result of var is 3 at the end
for (var i = 0; i < 3; i++) {

}
console.log(i) //3 








// 17. Functino parameter shadows outer variable so (i) => does not have value and is undefined

for (var i = 0; i < 3; i++) {
  setTimeout((i) => console.log(i), 0) // undefined undefined undefined
}



for (let i = 0; i < 3; i++) {
  setTimeout((i) => console.log(i), 0) // undefined undefined undefined
}







// 18. IIFE - > value is passed with a new scope every time

for (var i = 0; i < 3; i++) {
  ((i) => setTimeout(() => console.log(i), 0))(i)    // 0 1 2
}



for (var i = 0; i < 3; i++) {
  (function(i){
    setTimeout(() => console.log(i), 0)   // 0 1 2
  })(i)
}









// 19. Reassignment constant variable



const a = []
a = [1]

// console.log(a) // TypeError: Assignment to constant variable.










// 20. What this code will return



console.log('Start')

async function test() {
  console.log('Inside')

  await Promise.resolve()

  console.log('After await') // it belongs to paused async function so it runs later
}

test()

console.log('End')

// Start
// Inside
// End
// After await