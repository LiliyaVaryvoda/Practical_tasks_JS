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

