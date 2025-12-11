console.log(0 == 0) //true
console.log(0 === 0) // true

console.log('0' == 0) //true  -> '0' BECOMES 0 
console.log('0' === 0) //false

console.log(false == 0) //true   -> False becomes 0 ; true becomes 1
console.log(false === 0) //false

console.log(null == 0) //false  -> NULL IS NOT CONVERTED
console.log(null === 0) //false

console.log(undefined == 0) //false   -> UNDEFINED IS NOT CONVERTED
console.log(undefined === 0) //false

console.log(null == undefined) //true   -> Special rule
console.log(null === undefined) //false


console.log("0" == false) //true   -> '0' becomes 0 and false becomes 0
console.log("0" === false) //false

console.log([] == false) //true   ->
//console.log([] === false) //false

console.log([] == "") //true  -> [] becomes ''
//console.log([] === "") //false

console.log([""] == false) // true  -> [''] becomes '', then '' becomes 0 and false becomes 0

console.log("" == false) // true -> '' becomes 0 and false becomes 0


console.log("" == 0) // true   -> '' becomes 0