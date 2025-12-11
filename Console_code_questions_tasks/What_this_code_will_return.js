// 1. NAN IS NOT EQUAL TO ANYTHING

console.log(NaN === NaN) // false
console.log(Number.isNaN('abc')) // false
console.log(Number.isNaN(-1)) //false
console.log(Number.isNaN(NaN)) // true







// 2. NUMBER() AND NOT OPERATOR : ! CONVERTS TO BOOLEAN AND THEN MAKE OPPOSITE (so -3 is Boolean truthy and NOT makes it falsy), NUMBER() TAKES FALSY AS 0


const a = -3
console.log(Number(!a)) // 0







// 3. NON STRICT COMPARISON CONVERT ARRAY VALUE TO PRIMITIVE

function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return false
    }
    return true
}


console.log(isBig(1))    // false
console.log(isBig([2]))  // false
console.log(isBig([3]))  // true







// 4. LOGICAL && AND ||

console.log(true && false) // false
console.log(true || false)// true







// 5. RETURN WILL RETURN LAST VALUE IF THERE ARE FEW

function returnValue(a, b) {
    return a, b
}

console.log(returnValue(1, 2)); //2







// 6. WHAT WILL IIFE RETURN : b = 5 will become global variable and avaliable, var a = b -> function scoped in IIFE and disappear after finishing (Error)


(function () {
    var a = b = 5
})()
// console.log(a) // Error : a is not defined, error in strict mode
console.log(b) // 5 for non-srict mode, error b is not defined in strict mode


// In regular function, function scoped var is not visible outside
function regularVar() {
    var a = b = 5
}

//console.log(a) //Error a is not defined, erro in strict mode
console.log(b) // 5 for non-strict mode, error in strict mode







// 7. HOW VAR AND LET WORKS WITH TIMEOUT AND LOOP

// var variable - is function scoped so for block, the same var exists and final value is consoled after timeout
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3 3 3
}

// var variable - is function scoped, for synchronous there is console after each iteration, not at the end, no delay
for (var i = 0; i < 3; i++) {
    console.log(i); // 0 1 2
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0 1 2
}

//   for (const i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100); // TypeError: Assignment to constant variable. i++ - cannot work with const
//   }


for (let i = 0; i < 3; i++) {
    const j = i; // create a constant copy for this iteration
    setTimeout(() => console.log(j), 100); // 0 1 2
}










// 8. CONST VARIABLE AND LOOPS

// There is no increment so const num will have new for each iteration
const arrayOfNumbers = [1, 2, 3, 4, 5]
for (const num of arrayOfNumbers) {
    console.log(num) // 1 2 3 4 5 
}

// // Here there is increment so const i is reassigned because there is only one i for this iteration
// for(const i =0; i < 5 ; i++){
//     console.log(i) // error
// }










// 9. WHAT IS VARIABLE VALUE AT THE TIME OF EXECUTION

let x = 0;
function f() { console.log(x); }
x = 2;
f() //2









// 10. STRICT AND NON STRICT COMPARISON + TRUTHY AND FALSY VALUES

const item = 1


if (item === true) {
    console.log('Item is true');
} else {
    console.log('Item is false');
}

if (item == true) {
    console.log('Item is true!');
} else {
    console.log('Item is false!');
}



if (item) {
    console.log('Any');
}

// Item is false'
// 'Item is true!'
// 'Any'



const obj = "0"


if (obj) {
    console.log("Object is truthy");
}


if (obj == false) {
    console.log("Object is equal to false");
}
if (obj === false) {
    console.log("No");
}

// "Object is truthy"
// "Object is equal to false"










// 11.  Object → Regular Function → Arrow Function : NO BINDING NEDED



const obj0 = {
    name: "QA",
    greet: function () {
        return () => this.name;
    },
};
const greetFn = obj0.greet();
console.log(greetFn())

// QA



// Object → Regular Function → Regular Function: NOT WORKING
const obj1 = {
    name: "QA",
    greet() {
        return function () {   // regular function
            return this.name;
        };
    }
};

const fn = obj1.greet();
fn(); // ❌ this is undefined


// Object → Arrow Function → Anything: NOT WORKING


const obj2 = {
    name: "QA",
    greet: () => {  // ❌ arrow function as method — bad undefined
        return this.name;
    }
};









// 12. Date object with NaN time (In browser, it will be undefined)

console.log(new Date('not a date')) // Invalid Date












// 13. FUNCTION ADDED TO CONSTRUCTOR FUNCTION, NOT TO INSTANCE


// function Dog(name) {
//     this.name = name
// }
// Dog.bark = function () {
//     console.log(this.name + ' says woof')
// }
// let fido = new Dog('fido')
// fido.bark() //ERROR



function Dog1(name) {
    this.name = name
}
Dog1.bark = function () {
    console.log(this.name + ' says woof')
}
console.log(Dog1.bark()) // Dog1 says woof



function Dog2(name) {
    this.name = name
}
Dog2.prototype.bark = function () {
    console.log(this.name + ' says woof')
}
let fido2 = new Dog2('fido')
fido2.bark() //fido says woof










// 14.


function Car() {
    drive = function () {
      console.log("Instance method")
    }
  }
 
  const myCar = new Car()
  //myCar.drive()  // ERROR




function CarFixed() {
    CarFixed.prototype.drive = function () {
      console.log("Instance method")
    }
  }
 
  const myCarFixed = new CarFixed()
  myCarFixed.drive()   // Instance method




  function CarFixed2() {
    this.drive = function () {
      console.log("Instance method 2")
    }
  }
 
  const myCarFixed2 = new CarFixed2()
  myCarFixed2.drive()   // Instance method 2



  function CarFixed3() {}
  CarFixed3.prototype.drive = function () {
  console.log("Instance method 3")
}

const myCarFixed3 = new CarFixed3()
myCarFixed3.drive() // Instance method 3









// 15. Variables shadowing : inner variables have higher proprity than outer variables


let x1 = 10;

function test(x1) {  // <-- parameter shadows outer x
    console.log(x1);
}

test(99); // prints 99, not 10








// 16. 

console.log(0.1 + 0.2 == 0.3) //false
console.log(0.1 + 0.2 === 0.3) //false

const epsilon = 1*Math.pow(10, -10)
console.log(Math.abs((0.1+0.2) - 0.3) < epsilon) //true








// 17. SLICE() WITH NEGATIVE NUMBER : STRING LENGTH + THIS NEGATIVE INDEX (FOR EXAMPLE 7 -3 = 4 SO FROM 4 TILL END)
let e = 'abcdefg'
e = e.slice(-3)


console.log(e) // efg