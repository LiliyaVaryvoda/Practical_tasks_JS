// 1. SHORT CIRCUIT

function getName(name) {
    return name || "Guest";
  }

console.log(getName('John')) //John
console.log(getName('')) // Guest
console.log(getName(null)) // Guest
console.log(getName(undefined)) //Guest










// 2. NULISH OPERATOR
console.log(null ?? "default"); // "default"


console.log(0 ?? "default");  // 0


console.log('' ?? "default");  // ''












// 3. LOGICAL AND / OR
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




console.log(0 && 1) // 0 as first falsy value
console.log(1 && 2 && 3) // 3 as last truthy if all truthy
console.log("" && "hello") // '' as first falsy value
console.log("hi" && "" && "world") // '' as first falsy value






// 4. Not-strict and strict comparisons

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


console.log(['2'] == 2) // true   ->  as array converted to promitive, ['2'] becomes '2' and then sting converted to number so it will be 2  == 2












// 5. NON STRICT COMPARISON CONVERT ARRAY VALUE TO PRIMITIVE

function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return false
    }
    return true
}


console.log(isBig(1))    // false
console.log(isBig([2]))  // false
console.log(isBig([3]))  // true










// 6. TRUTHY VALUES
console.log(Boolean("0")) // true
console.log(Boolean([])) // true
console.log(Boolean([''])) // true
console.log(Boolean({})) // true















// 7.FALSY VALUES
// There are 8 falsy values in JS, everything else is truthy
console.log(Boolean(0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('')) // false
console.log(Boolean(false)) // false
console.log(Boolean(0n)) // false














// 8. STRICT AND NON STRICT COMPARISON + TRUTHY AND FALSY VALUES

const item = 1


if (item === true) {
    console.log('Item is true');
} else {
    console.log('Item is false'); // 'Item is false' as it is strict comparison
}

if (item == true) {
    console.log('Item is true!'); // 'Item is true' as it is not strict comparison so true will become 1
} else {
    console.log('Item is false!');
}



if (item) {
    console.log('Any'); // 'Any' because item is truthy
}











// 9. STRICT AND NON STRICT COMPARISON + TRUTHY AND FALSY VALUES
// for strict comparison ,there is no type coercion

const obj = "0"


if (obj) {
    console.log("Object is truthy");  // "Object is truthy" as it is not empty string and not number 0
}


if (obj == false) {
    console.log("Object is equal to false"); // "Object is equal to false" as '0' will be 0 and false will be 0 and it is not strict comparison
}
if (obj === false) {
    console.log("No");
}

