// 1. Object method that has inner function with this

// Object context is lost because function return another function and this returned function is called separately as plain function without object context


// 1.1 Object with inner function that has return
const objInner = {
  value: 10,
  get() {
    return function () {
      return this.value;
    };
  }
};

console.log(objInner.get()()); // undefined

// the same
const fn = objInner.get();
console.log(fn()); // undefined



// Fix 1
// ------------------

const objInnerFixWithBind = {
  value: 10,
  get() {
    return function () { 
      return this.value;
    };
  }
};

console.log(objInnerFixWithBind.get().call(objInnerFixWithBind)); // 10

// the same
const fnFixWithBind = objInnerFixWithBind.get().bind(objInnerFixWithBind);
console.log(fnFixWithBind()); // 10



// Fix 2
// --------------------
const objInnerFixWithArrow = {
  value: 10,
  get() {
    return () => { 
      return this.value;
    };
  }
};

console.log(objInnerFixWithArrow.get()()); // 10

// the same
const fnInnerFixWithArrow = objInnerFixWithArrow.get();
console.log(fnInnerFixWithArrow()); // 10









// 1.2 Object with function that has inner function and inner function does not have return and is called inside outer function

// inner() is called as a plain function, not as objContext.inner().


const objContext = {
  name: "Anna",
  outer() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

objContext.outer() // undefined


// fix: Use call binding for inner function execution
// ----------------------------------------------

const objContextFix = {
  name: "Anna",
  outer() {
    function inner() {
      console.log(this.name);
    }
    inner.call(this);
  }
};

objContextFix.outer() // Anna







// 1.3 Object with function that has inner function with return and outer function return inner function execution

// fn() is called as a plain function and loses context


const user = {
  name: "Anna",
  getName() {
    const fn = function () {
      return this.name;
    };
    return fn();
  }
};

console.log(user.getName()); // undefined


// fix 1 : arrow inner function declaration
// --------------------------------

const userFixed = {
  name: "Anna",
  getName() {
    const fn = ()=> {
      return this.name;
    };
    return fn();
  }
};

console.log(userFixed.getName()); // Anna




// fix 2 : use call binding
// ----------------------------------
const userFixed2 = {
  name: "Anna",
  getName() {
    const fn = function (){
      return this.name;
    };
    return fn.call(this);
  }
};

console.log(userFixed2.getName()); // Anna






// 2. Settimeout
// setTimeout callback is a plain function that not bound to the object
// Settimeout callbacl is a plain function : example 1
const user1 = {
  name: "Anna",
  getName() {
    setTimeout( function () {
      console.log(this.name);
    }, 100);
  }
};

user1.getName() // undefined



// Settimeout callbacl is a plain function : example 2
const objSetTimeout = {
  value: 1,
  inc() {
    setTimeout(function () {
      this.value++;
      console.log(this.value);
    }, 0);
  }
};

objSetTimeout.inc(); // NaN; because this.undefined++ =NaN




// Settimeout callbacl is a plain function : example 3 
// Here it is undefined as obj.function as setTimeout callback becomes plain function and it is detached and loses this context
const objSetTimeoutRef = {
  name: "Anna",
  print() {
    console.log(this.name);
  }
};

setTimeout(objSetTimeoutRef.print, 0) // undefined



// Settimeout callbacl is a plain function : example 4
// Here it is  error as obj.function() is executed immediately and callback us undefined (as this function return undefined)
const objSetTimeoutErr = {
  name: "Anna",
  print() {
    console.log(this.name);
  }
};

// setTimeout(objSetTimeoutErr.print(), 0) // error




// Fix 1 example : use function wrapper
// ------------------------------------
const user1Fix = {
  name: "Anna",
  getName() {
    setTimeout( () => {
      console.log(this.name);
    }, 100);
  }
};

user1Fix.getName() // Anna



// Fix 2 example : use function wrapper
// ------------------------------------
const objCorrect = {
  name: "Anna",
  print() {
    console.log(this.name);
  }
};

setTimeout(() => objCorrect.print(), 0); // Anna








// 3. This as global



function show() {
  console.log(this);
}

show(); // global object  Object [global] in not strict mode








// 4. Detached function



const objDet = {
  value: 10,
  show() {
    console.log(this.value);
  }
};

const fnDet = objDet.show;
fnDet(); // undefined

// Fix : binding
const fnDetFixed = objDet.show.bind(objDet);
fnDetFixed() //10


// Detached example 2

const counter = {
  count: 0,
  inc() {
    this.count++;
  }
};

const inc = counter.inc;
inc();

console.log(counter.count); // 0







// 5. Changing property of existing value inside method



const objProperty = {
  value: 1,
  inc() {
    this.value++;
    return this.value;
  }
};

console.log(objProperty.inc()); // 2
console.log(objProperty.inc()); // 3








// 6. Arrow inner function
// Arrow inner function takes scope from parent scope (getValue) function

const objArrow = {
  value: 10,
  getValue() {
    return () => this.value;
  }
};

const fnArrow = objArrow.getValue() // () => this.value; arrow functions take this from the lexical scope (where they are defined)
console.log(fnArrow()); //10








// 7. Override this with .call()


const objOverride = {
  value: 10,
  get() {
    return this.value;
  }
};

console.log(objOverride.get.call({ value: 99 })); // 99









// 8. This in constructor function

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const p = new Person("Anna");
console.log(p.getName()); // Anna
