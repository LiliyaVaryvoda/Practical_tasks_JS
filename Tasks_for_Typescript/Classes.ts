// 1. Access modifiers



// 1.1 Public (default)

class User1 {
    public name: string
    constructor(name: string){
        this.name = name
    }
}

const user1Instance = new User1('Anna')
console.log(user1Instance.name) //Anna





// 1.2 Private

class User2 {
    private name: string
    constructor(name:string){
        this.name = name
    }
}


const user2Instance = new User2('Vik')
//console.log(user2.name)  // compile-time error with TS type checking (ts-node); not truly private at runtime in JS




// 1.3 Private class field in JS



class User3 {
    #name: string
    constructor(name:string){
        this.#name = name
    }
    getName(){
        return this.#name
    }
}


const user3 = new User3('Sophia')
//console.log(user3.#name)  // error; real JavaScript privacy
//console.log(user3.name)  // undefined
console.log(user3.getName()) // Sophia







// 1.4 Protected

class User4{
    protected name: string
    constructor(name:string){
        this.name = name
    }
}

const user4 = new User4('Shane')
// console.log(user4.name) // Error with ts-node

class User4Child extends User4{
    constructor(name:string){
        super(name)
    }

    getName(){
        return this.name
    }
}

const user4Child = new User4Child('Paul')
// console.log(user4Child.name) // Error with ts-node
console.log(user4Child.getName()) // nothing
//console.log("FILE IS RUNNING");