//SHORT CIRCUIT

function getName(name) {
    return name || "Guest";
  }

console.log(getName('John')) //John
console.log(getName('')) // Guest
console.log(getName(null)) // Guest
console.log(getName(undefined)) //Guest


// NULISH OPERATOR
console.log(null ?? "default"); // "default"


console.log(0 ?? "default");  // 0


console.log('' ?? "default");  // ''




// LOGICAL AND / OR
console.log(false && true || false) //false

console.log(true && false || true) // true

console.log(false || true && false) // false
 
console.log(true || false && false) // true

console.log(false && false || true && false) // false

console.log(true || false && true || false) // true

console.log(false && true || true && false) // false

console.log(true && true || false && false) //true





console.log((false && true) || false) // false

console.log(false && (true || false)) // false

console.log((true || false) && false) // false
 
console.log((false || false) && (true || false)) // false





console.log(0 && false) //0 -> first falsy

console.log(1 && true && "hello" && 99); //99 as last truthy



console.log(false || 0 || "yes") // yes

console.log(false || 0 || null )  // null

console.log((false||0)) // 0












console.log(0 == 0) //true
console.log(0 === 0) // true

console.log('0' == 0) //true  -> '0' BECOMES 0 
console.log('0' === 0) // false

console.log(false == 0) //true   -> False becomes 0
console.log(false === 0) //false

console.log(null == 0) //false  -> NULL IS NOT CONVERTED
console.log(null === 0) //false

console.log(undefined == 0) //false   -> UNDEFINED IS NOT CONVERTED
console.log(undefined === 0) //false

console.log(null == undefined) //true   -> Special rule
console.log(null === undefined) //false


console.log("0" == false) //true   -> '0' becomes 0 and false becomes 0
console.log("0" === false) //false

console.log([] == false) //true   -> [] becomes '' and '' becomes 0; false becomes 0
//console.log([] === false) //false

console.log([] == "") //true  -> [] becomes ''
//console.log([] === "") //false

console.log([""] == false) // true  -> [''] becomes '', then '' becomes 0 and false becomes 0

console.log("" == false) // true -> '' becomes 0 and false becomes 0


console.log("" == 0) // true   -> '' becomes 0














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








// 1. TRUTHY VALUES
console.log(Boolean("0")) // true
console.log(Boolean([])) // true
console.log(Boolean([''])) // true
console.log(Boolean({})) // true


// FALSY VALUES
console.log(Boolean(0)) // false













// 2. STRICT AND NON STRICT COMPARISON + TRUTHY AND FALSY VALUES

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


