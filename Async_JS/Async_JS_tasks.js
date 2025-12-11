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








// // 3. WRITE FUNCTION THAT RETURNS PROMISE AND ANOTHER FUNCTINO THAT USES IT


function returnPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('Done')}, 5000)
    })
}


async function acceptPromise(){
    const promiseFunc = await returnPromise()
    console.log(promiseFunc)
}

acceptPromise() // Done










// 4. Use JS/TS to write a function that creates two test users via an API. This function will be used as a hook for tests, so the order of user creation 
//does not matter. 




//const axios = require('axios');


async function createTestUsers() {
 try {
   const user1 = axios.post('https://api.example.com/users', {
     username: 'testuser1',
     email: 'testuser1@example.com',
     password: 'password123',
   });


   const user2 = axios.post('https://api.example.com/users', {
     username: 'testuser2',
     email: 'testuser2@example.com',
     password: 'password123',
   });


   const [response1, response2] = await Promise.all([user1, user2]);


   console.log('User 1 created:', response1.data);
   console.log('User 2 created:', response2.data);
 } catch (error) {
   console.error('Error creating users:', error);
 }
}


//createTestUsers();