// 1. CHECK IF BALANCED BRACKETS

function checkIfBalancedBrackets(str) {
    let stack = []
    let pairs = {
        '}':'{',
        ']' : '[',
        ')' :'('
    }

    for (let char of str){
        if (char === '(' || char === '[' || char === '{'){
            stack.push(char)
        }

        if (char === ')' || char === ']' || char === '}'){
            if (stack.length===0) {return false}

            let removedChar = stack.pop()

            if (removedChar!==pairs[char]){
                return false
            }
        }
    }

    if (stack.length!==0) return false
    return true
}

console.log(checkIfBalancedBrackets('(hello))')) // false
console.log(checkIfBalancedBrackets('(hello))(')) // false
console.log(checkIfBalancedBrackets('(((hello)))()')) // true
console.log(checkIfBalancedBrackets(")("));       // false
console.log(checkIfBalancedBrackets("(()"));      // false
console.log(checkIfBalancedBrackets("([)]"));      // false









// 2. RETURN LIST OF MANAGERS OF EMPLOYEE


const employeesListAll = [
    { employeeId: 11, name: 'John', managerId: 11 },
    { employeeId: 50, name: 'Todd', managerId: 73 },
    { employeeId: 150, name: 'Alex', managerId: 200 },
    { employeeId: 73, name: 'Sara', managerId: 11 },
    { employeeId: 200, name: 'Alex', managerId: 50 },
    { employeeId: 100, name: 'Alex', managerId: 150 },
];



function getManagersOfEmployees(employees, id) {
    let listManagers = new Set()

    function findMagager(currentId){
        let employee = employees.find(elem => elem.employeeId === currentId)
        if (!employee) return
        let managerId = employee.managerId
        if (!listManagers.has(managerId)){
            listManagers.add(managerId)
        }
        if (employee.employeeId !== managerId){
            findMagager(managerId)
        }
    }
    findMagager(id)
    return [...listManagers]
}


console.log(getManagersOfEmployees(employeesListAll, 200)) // [ 50, 73, 11 ]
console.log(getManagersOfEmployees(employeesListAll, 11)) // [ 11 ]
console.log(getManagersOfEmployees(employeesListAll, 150)) // [ 200, 50, 73, 11 ]
console.log(getManagersOfEmployees(employeesListAll, 600)) //[]










// 3. CHECK IF TIME IS IN 24 H FORMAT

function validateTime24Format(str){
    return /^([01][0-9]|[2][0-3])\:[0-5][0-9]$/.test(str)
}

console.log(validateTime24Format('13:23')) // true
console.log(validateTime24Format('23:59')) // true
console.log(validateTime24Format('24:00')) // false
console.log(validateTime24Format('12:60')) // false
console.log(validateTime24Format('13:237')) // false










// 4. CHECK IF VALID URL

function isValidURL(str){
    try{
        const url = new URL(str)
        if (!(str === url.href || str === url.href.slice(0,-1))) {return false}
        return true
    }
    catch{
        return false
    }
}

console.log(isValidURL('https://example.com')) //true
console.log(isValidURL('http://example.com')) //true
console.log(isValidURL('ftp://example.com')) //true
console.log(isValidURL('one')) //false
console.log(isValidURL('example.com')); //false










// 5. CHECK IF STRONG PASSWORD

function isStrongPassword(str){
    const lowerCase = /[a-z]/
    const upperCase = /[A-Z]/
    const numbersCase = /[0-9]/
    const specialChar = /[^A-Za-z0-9 ]/
    const spaces = /^\S+$/

    return str.length>=8 && lowerCase.test(str) && upperCase.test(str) && numbersCase.test(str)&& specialChar.test(str) && spaces.test(str)

}


console.log(isStrongPassword("Password123!")); //  true
console.log(isStrongPassword("pass123!"));     //  false (no uppercase, too short)
console.log(isStrongPassword("PASSWORD123!")); //  false (no lowercase)
console.log(isStrongPassword("Password"));     //  false (no number, no special char)
console.log(isStrongPassword("Password1"));    // false (no special char)
console.log(isStrongPassword("Pass word123!")); // false (has space)











// 6. CHECK IF VALID EMAIL

function checkIfEmail(str){
    const regexEmail = /^[^\s@]+\@[^\s@]+\.[^\s@]+$/
    return regexEmail.test(str)
}

console.log(checkIfEmail('hello@email.com')) //true
console.log(checkIfEmail('helloemail.com')) //false
console.log(checkIfEmail('hello@email. com')) //false
console.log(checkIfEmail('hello@emailcom')) //false
