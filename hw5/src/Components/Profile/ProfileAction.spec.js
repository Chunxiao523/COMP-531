import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'
import { fetchProfile } from './ProfileAction.js'
import { resource, url } from '../action.js'
//profile test
describe('Validate Profile actions (mocked requests)', (done) => {
		beforeEach(() => {
	    if (mockery.enable) {
		    mockery.enable({warnOnUnregistered: false, useCleanCache:true})
		    mockery.registerMock('node-fetch', fetch)
		    require('node-fetch')
    }
  })

	afterEach(() => {
	    if (mockery.enable) {
		    mockery.deregisterMock('node-fetch')
		    mockery.disable()
	}
  })

	it ('should fetch the user proile information', (done) => {

	    mock(`${url}/avatars`, {
      		method: 'GET',
      		headers: {'Content-Type':'application/json'},
      		json: {username:'cz31', avatar:'avatar'}
    })
	//     mock(`${url}/email`, {
	//       	method: 'GET',
	//       	headers: {'Content-Type':'application/json'},
	//       	json: { username: 'cz31', email: 'cz31@rice.edu' }
	// })
	//     mock(`${url}/headlines`, {
	//       	method: 'GET',
	//         headers: {'Content-Type':'application/json'},
	//         json: { username: 'cz31', headline:'Good day'}
	// })
	//     mock(`${url}/zipcode`, {
	//         method: 'GET',
	//         headers: {'Content-Type':'application/json'},
	//         json: { username: 'cz31', zipcode: '123' }
	// })

    fetchProfile('avatars')((r) => {
	    expect(r).to.eql({ 
	      type:'UPDATE_PROFILE', avatar:'avatar'})
    })
          .then(done)
          .catch(done)
	})

	it ('should update headline', (done) => {
		done()
	})
})
