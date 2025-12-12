// 1. Function and function instance


function Person() {}
Person.prototype.sayHi = function() {
  return "Hi";
};

const user = new Person();

console.log(user.sayHi()); // Hi

console.log(user.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true

console.log(Function.__proto__ === Function.prototype); // true

console.log(Person.__proto__) // {}
console.log(Function.prototype) // {}
console.log(Function.__proto__) // {}

console.log(user.__proto__) // { sayHi: [Function (anonymous)] }
console.log(Person.prototype) // { sayHi: [Function (anonymous)] }
console.log(Person.__proto__) // {}











// 2. CREATE OBJECT WITHOUT PROTOTYPE

const objWithoutPrototype = Object.create(null)
console.log(Object.getPrototypeOf(objWithoutPrototype)) // null










// 3. Manually implement inheritance

function Animal(name, age) {
    this.name = name;
    this.age = age
  }

  Animal.prototype.eat = function() {
    return this.name + " eats"
  }

  Animal.prototype.isOld = function() {
    return this.age + " years old"
  }
  
  function Dog(name, age) {
    Animal.call(this, name, age)
}

Dog.prototype = Object.create(Animal.prototype)
  
  const rex = new Dog("Rex", 5);
  console.log(rex.eat());  // Rex eats
  console.log(rex.isOld()) // 5 years old
  










// 4. Add method to all objects created by a constructor

function Car(model) {
    this.model = model;
  }
  
  // Add sayModel() so all new cars can use it
Car.prototype.sayModel = function(){
    return this.model
}

const ferrariCar = new Car('ferrari')
console.log(ferrariCar.sayModel()) //ferrari

const audiCar = new Car('audi')
console.log(audiCar.sayModel()) //audi






  // 5. Detect whether method is own or inherited

  const obj = { a: 1 };
  console.log(Object.getOwnPropertyNames(obj)) // ['a']









  // 6. What is the output?

const obj1 = { x: 1 };
const child = Object.create(obj1);
child.y = 2;

console.log(child.x);       // 1
console.log(child.hasOwnProperty('x'));  // false
console.log('x' in child);    // true as key in objects searches for own, inherited properties









// 7. Why does this not work?


const obj2 = {};
//obj2.prototype.sayHello = () => console.log("Hello"); // arrow function +  plain object does not have .prototype


//obj2.__proto__.sayHello() // will add this method for all Objects; to Object.prototype


obj2.sayHello = function(){
    console.log('Hello') //correct way
}








// 8. Modify this to use prototype instead of adding method to each instance

function User(name) {
    this.name = name;
    this.sayHi = () => "Hi " + this.name;
  }
  


  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function(){
    return 'Hi ' + this.name
  }

const userAdmin = new User('admin')
console.log(userAdmin.sayHi())







  // 9. Convert constructor inheritance to class inheritance


  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function() {
    return "Hi";
  };
  

  class Person1 {
    constructor(name){
        this.name = name
    }
    sayHi(){
        return 'Hi ' + this.name
    }
  }


  const userUser = new Person1('User')
  console.log(userUser.sayHi()) // Hi user










// 10.

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
myCarFixed3.drive() // In











// 11. FUNCTION ADDED TO CONSTRUCTOR FUNCTION, NOT TO INSTANCE


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
