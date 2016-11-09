import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'

import {resource,url,returnerror,returnsuccess,
  navmain,navprofile, navstartpage, userlogin, userlogout,fetchProfile} from './action.js'


describe('Validate actions', () => {
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
	it('resource should be a resource', (done) => {
		done()

	})
})

describe('Validate Authentication', (done) => {
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

	it ('should log in a user', (done) => {
	    done()
		})
	it ('should not log in an invalid user', (done) => {
		done()
	})
	it ('should log out a user (state should be cleared)', (done) => {
		done()
	})
})


