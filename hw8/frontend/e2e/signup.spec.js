import { expect } from 'chai'
import { go, sleep, findId, findCSS, By } from './selenium'
import common from './common'

exports.creds = {
    username: 'cz31test',
    password: 'damage-butter-memory'
}

describe('Test frontend application', ()=>{

    before('should load the page', (done)=>{
        go().then(done)
    })


    it('should show the register message', (done) => {
        sleep(500)
        .then(findId('username2').sendKeys('test'))
        .then(findId('email').sendKeys('abc@rice.edu'))
        .then(findId('zipcode').sendKeys('77005'))
        .then(findId('password2').sendKeys('password'))
        .then(findId('pwconf').sendKeys('password'))
        .then(findId('register').click())
        .then(findId('notif').then((element)=>{
            expect(element).to.be.ok
        }))
        .then(sleep(500))
       done()
    })

})