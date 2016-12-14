import { expect } from 'chai'
import Reducer from './reducers'
import { navi, articles, profile, followers,check } from './reducers'

const initState = {
			articles: {
				articles: {}, 
				keyword: ''
			},
				navi: {
				location:'START'
			},
			profile: 
			{ 
				username:'', 
				headline: '', 
				avatar: '', 
				zipcode: '', 
				email: '' 
			},
			followers: {
				follower: {}
			},
			check: {
				success:'',
				error:''
			}
		}
describe('Reducer tests', () => {
	it('should initialize state', () => {
		expect(Reducer({}, {})).to.eql(initState)
	})

	it('should state success ', () => {
		
	})

	it('should state error', () => {
		expect(check(initState.check, {type:'ERROR', error:'testerr'}))
		.to.eql({success: '', error:'testerr'})
	})

	 it('should set the articles', (done) => {
    	const act={type:'UPDATE_ARTICLES',articles:{text:'test'}}
    	expect(Reducer(undefined,act))
    	.to.eql({ ...initState, articles: {articles:{text:'test'},keyword:''}})
    	done()
  })

	it('should set the search keyword', (done) => {
    	const act={type:'SEARCH_ARTICLE',keyword:'cz31'}
    	expect(Reducer(undefined,act))
    	.to.eql({...initState, articles: {articles:{},keyword:'cz31'}})
    	done()
  })

	it('should filter displayed articles by the search keyword', (done) => {
    	const act={type:'FILTER_ARTICLE',articles:{text:"Love mn"},keyword:'cz31'}
    	expect(Reducer(undefined,act))
    	.to.eql({ ...initState, articles:{articles:{text:'Love mn'},keyword:'cz31'}})
    	done()
    })
})