// 1. This context
// Object context is lost because function return another function and this returned function is called separately



const obj = {
  value: 10,
  get() {
    return function () {
      return this.value;
    };
  }
};

console.log(obj.get()()); // undefined

// the same
const fn = obj.get();
console.log(fn()); // undeifned



// fix

const objFixed = {
  value: 10,
  get() {
    return function () {
      return this.value;
    };
  }
};

console.log(objFixed.get().call(objFixed)); // 10
console.log(objFixed.get().apply(objFixed)); //10


const objFixed2 = {
  value: 10,
  get() {
    return () => {
      return this.value;
    };
  }
};

console.log(objFixed2.get()()); //10









// 2. Override this with .call()


const objOverride = {
  value: 10,
  get() {
    return this.value;
  }
};

console.log(objOverride.get.call({ value: 99 })); // 99











// 3. This context lost
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


// fix

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










// 4. This context
// Undefined because fn() is not attached to user object


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


// fix

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










// 5. This context

const user1 = {
  name: "Anna",
  getName() {
    setTimeout( function () {
      console.log(this.name);
    }, 100);
  }
};

user1.getName() // undefined


const user1Fix = {
  name: "Anna",
  getName() {
    setTimeout( () => {
      console.log(this.name);
    }, 100);
  }
};

user1Fix.getName() // Anna











// 6. This as global



function show() {
  console.log(this);
}

show(); // global object  Object [global] in not strict mode








// 7. Detached function



const objDet = {
  value: 10,
  show() {
    console.log(this.value);
  }
};

const fnDet = objDet.show;
fnDet(); // undefined

// fix
const fnDetFixed = objDet.show.bind(objDet);
fnDetFixed() //10











// 8. Changing property of existing value



const objProperty = {
  value: 1,
  inc() {
    this.value++;
    return this.value;
  }
};

console.log(objProperty.inc()); // 2
console.log(objProperty.inc()); // 3








// 9.


const objArrow = {
  value: 10,
  getValue() {
    return () => this.value;
  }
};

const fnArrow = objArrow.getValue() // () => this.value; arrow functions take this from the lexical scope (where they are defined)
console.log(fnArrow()); //10









// 10. Object function detached

const counter = {
  count: 0,
  inc() {
    this.count++;
  }
};

const inc = counter.inc;
inc();

console.log(counter.count); // 0








// 11. Settimeout
// Any function passed to setTimeout is called as a plain function call



// Here function inside settimeout becomes just plain function and it loses this context
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




// Here it is undefined as obj.function as setTimeout callback becomes plain function and it is detached and loses this context
const objSetTimeoutRef = {
  name: "Anna",
  print() {
    console.log(this.name);
  }
};

setTimeout(objSetTimeoutRef.print, 0) // undefined



// Here it is  error as obj.function() is executed immediately and callback us undefined (as this function return undefined)
const objSetTimeoutErr = {
  name: "Anna",
  print() {
    console.log(this.name);
  }
};

// setTimeout(objSetTimeoutErr.print(), 0) // error




// There is wrapper function as settimeout callback function so everything is working; could have been bind

const objCorrect = {
  name: "Anna",
  print() {
    console.log(this.name);
  }
};

setTimeout(() => objCorrect.print(), 0); // Anna

