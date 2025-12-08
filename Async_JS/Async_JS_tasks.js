// 1. CREATE A FUNCTION THAT RETURNS A PROMISE WHICH RESOLVES AFTER 2 SEC WITH MESSAGE 'DONE'


const functionPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Consoled')
        resolve('Done')
    }, 2000)
})


functionPromise.then(message => console.log(message)).catch(() => console.log('error'))










// 2. CREATE PRECONDITIONS FOR FEW SEPARATE ASYNC ACTIONS


function preconditions(){
    return Promise.resolve()
}

async function task1(){
    await preconditions()
    console.log('task 1')
}


async function task2(){
    await preconditions()
    console.log('task 2')
}


async function main(){
    await preconditions()
    await Promise.all([task1(), task2()])
}


main()