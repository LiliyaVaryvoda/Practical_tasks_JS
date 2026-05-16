// 1. Ways of creating a promise


// -----------------------
// 1.1 Manual


const promise1 = new Promise((resolve, reject) =>{
    resolve('success')
}) // can later be used with then(); promise is fullfilled


new Promise((resolve, reject)=> {
    resolve('success')
}) // not stored anywhere; fullfilled



// -------------------------
// 1.2 Promise.resolve()


Promise.resolve(5).then(value => console.log(value)) //5


const p3 = Promise.resolve(5)
p3.then(value => console.log(value)) //5



//--------------------------
// 1.3 Promise.reject()

const pReject = Promise.reject('error')
pReject.catch(err => console.log(err))


// ------------------------
// 1.4 Creating promise via function


function test(){
   return Promise.resolve(5)
}
test().then(value => console.log(value)) //5



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








// 5. What will be the output

console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Start
// End
// Promose
// Timeout










// 6. What will be the output

setTimeout(() => console.log('A'), 0);

Promise.resolve()
  .then(() => console.log('B'))
  .then(() => console.log('C'));

console.log('D');

// D
// B
// C
// A








// 7. What will be the output

async function test() {
  console.log('1');
  await Promise.resolve();
  console.log('2');
}

console.log('3');
test();
console.log('4');


// 3
// 1
// 4
// 2









// 8. Write a simple promise

const myPromise = new Promise((resolve, reject) => {
    const success = true
    if (success){
        resolve('Success')
    }
    else{
        reject('REJECT')
    }
})


myPromise.then(message => console.log(message)).catch(err => console.error(err)).finally(() => console.log('End')) 
// Success
//End








// 9. What will be the output

async function test() {
  console.log('1');

  return await Promise.resolve('2');
}

test().then(console.log);

console.log('3');



//1
//3
//2








// 10. What will be the output?


setTimeout(() => {
  console.log('1');

  Promise.resolve().then(() => {
    console.log('2');
  });

  console.log('3');
}, 0);

console.log('4');


//4
//1
//3
//2









// 11. WHat is the output


console.log('start');

new Promise((resolve) => {
  console.log('inside promise');

  resolve();

  console.log('after resolve');
}).then(() => {
  console.log('then 1');
});

console.log('end');

// start
// inside
// after
// end
// then 1








// 12. WHat this code will return


async function test() {
  console.log('1');

  throw new Error('error');

  console.log('2');
}

console.log('3');

test().catch(() => {
  console.log('4');
});

console.log('5');

 //3
 //1
 //5
 //4










 // 13. What will be the output


 const p1 = Promise.resolve().then(() => {
  console.log('A');
});

const p2 = Promise.resolve().then(() => {
  console.log('B');
});

Promise.all([p1, p2]).then(() => {
  console.log('C');
});

console.log('D');


// d
// a
// b
//c

