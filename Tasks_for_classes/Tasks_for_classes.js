// 1. WRITE A CLASS WITH STATIC METHOD

class Animals {
    constructor(name) {
        this.name = name
    }

    static makeSound() {
        console.log('Animal is making sound')
    }
}


Animals.makeSound()
const dog = new Animals('Bim')
//dog.makeSound() // Error