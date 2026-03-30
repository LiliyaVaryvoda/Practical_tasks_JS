// loginPage.js

class LoginPage{
    constructor(page){
        this.page = page
        this.username = page.locator('#username')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('button[type="submit"]')
    }

    async login(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}


module.exports = {LoginPage}




// login.test.js

// import {test} from '@playwright/test'
// const {LoginPage} = require('./loginpage')

// test('Validate login', async({page}) =>{
//     const loginPage = new LoginPage(page)
//     await page.goto('https://example.com')
//     await loginPage.login('admin', '123')
// })