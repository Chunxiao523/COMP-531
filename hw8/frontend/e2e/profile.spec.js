import { expect } from 'chai'
import { go, sleep, findId, findCSS, By } from './selenium'
import common from './common'
exports.creds = {
    username: 'cz31test',
    password: 'damage-butter-memory'
}
describe('Test profile page', ()=>{

//navigate to profile page
    before('should navigate profile page', (done)=>{
        go().then(done)
    })
    it('navigate profile page', (done) => {
         sleep(500)
        .then(findId('username').clear())
        .then(findId('password').clear())
        .then(findId('username').sendKeys(exports.creds.username))
        .then(findId('password').sendKeys(exports.creds.password))
        .then(findId('login').click())
        .then(sleep(1500))
        .then(findId('profilepage').click())
        .then(sleep(2000))
        .then(done)
    })
// update email, the account information will change and there will be a success message
    it('Update the user email and verify', (done) => {
        const newemail = 'test@rice.com'
        sleep(500)
        .then(findId('address').clear())
        .then(findId('address').sendKeys(newemail))
        .then(findId('updateInformation').click())
        .then(sleep(500))
        .then(findId('curaddress').getText().then(text=>{
            expect(text).to.eql(newemail)
        }))
        .then(findId('notif').getText()
            .then(text => {
                expect(text).to.eql('Email updated!')
            }))
        .then(done)
    })

//once update zipcode, the account information will change and there will be a success message
    it('should update user zipcode and verify', (done) => {
        const newzipcode = '12345'
        sleep(500)
        .then(findId('zip').clear())
        .then(findId('zip').sendKeys(newzipcode))
        .then(findId('updateInformation').click())
        .then(sleep(500))
        .then(findId('curzip').getText().then(text=>{
            expect(text).to.eql(newzipcode)
        }))
        .then(findId('notif').getText()
            .then(text => {
                expect(text).to.eql('Zipcode updated!')
            }))
        .then(done)
    })

//should not change password
    it('should update user password and verify', (done)=>{
        const newPassword = "1234"
        sleep(500)
        .then(findId('password').clear())
        .then(findId('pwconf').clear())
        .then(findId('password').sendKeys(newPassword))
        .then(findId('pwconf').sendKeys(newPassword))
        .then(findId('updateInformation').click())
        .then(sleep(500))
        .then(findId('notif').getText()
            .then(text => {
                expect(text).to.eql('will not change password')
            }))
        .then(sleep(500))
        .then(done)
    })


})
