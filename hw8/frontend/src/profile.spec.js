const expect = require('chai').expect
const fetch = require('isomorphic-fetch')
const cur_articles = [
	{
		id:1, author: 'scott', text: 'This is my first article', date: '2016-11-1', comments: []
	}, 
	{
		id:2, author: 'Chunxiao', text: 'This is my second article', date: '2016-11-1', comments: []
	}, 
	{
		id:3, author: 'CJ', text: 'This is my thrid article', date: '2016-11-1', comments: []}]
const url = path => `http://localhost:3000${path}`
describe('Validate headline functionality', () => {
	let oldheadline;
	it('PUT headline updates the headline message', (done) => {
		fetch(url('/headlines'))
		.then(res => {
			expect(res.status).to.eql(200)
			return res.json()
		})
		.then(body => {
			oldheadline = body.headline
		})
		fetch(url('/headline'), 
			{method: "PUT",
			headers: {"Content-Type": "application/json"},
			body : JSON.stringify({headline:"test headline"})})
		.then((r) => {
			expect(r.status).to.eql(200)
			return r.text()
		})
		fetch(url('/headlines'))
		.then(res => {
			expect(res.status).to.eql(200)
			return res.json()
		})
		.then(body => {
			expect(body.headline).not.to.eql(oldheadline)
		})
		.then(done)
		.catch(done)
	})
}, 200)

