import { expect } from 'chai'
import { go, sleep, findId, findCSS, By } from './selenium'
import common from './common'

describe('Test Dummy Server Example Page', () => {
    const preamble = 'you are logged in as'
    const newHeadlineText = "hello"

    exports.hl = {
        headline: 'cz31',
    }

    before('should log in', (done) => {
        go().then(common.login).then(done)
    })

    it('should log in as the test user', (done) => {
        sleep(500)
        .then(findId('message').getText()
            .then(text => {
                expect(text.indexOf(preamble)).to.equal(0)
                console.log(text.indexOf(preamble))
            })
            .then(sleep(500))
            .then(done))
    })

    it("Update the headline and verify the change", (done) => {
        var old = 'gjhjk'
        sleep(500)
        .then(findId('newHeadline').clear())
        .then(findId('newHeadline').sendKeys(exports.hl.headline))
            .then(findId('headline').click())
            .then(sleep(1500))
            .then(findId('message').getText()
                .then(sleep(1500))
                .then(text => {
                    expect(text).to.equal('you are logged in as cz31')
                }))
            .then(sleep(1500))
        .then(findId('newHeadline').clear())
        .then(findId('newHeadline').sendKeys(old))
            .then(findId('headline').click())
            .then(sleep(1500))
            .then(findId('message').getText()
                .then(sleep(1500))
                .then(text => {
                    expect(text).to.equal('you are logged in as gjhjk')
                }))
            .then(sleep(1500))
            .then(done)
        done()
    })

    after('should log out', (done) => {
         sleep(500)
        .then(common.logout)
         .then(sleep(1000))
        .then(findId('message').getText()
        .then(text => {
            expect(text).to.equal('You have logged out')
        }))       
        .then(done)
    })
})
