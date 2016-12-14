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
describe('Validate Article functionality', () => {
	var length
	it('GET and count the current number of articles', (done) => { //get test
		fetch(url('/articles/'))
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.text()
		})
		.then(body => {
			length = eval(body).length
			expect(eval(body).length).to.at.least(3)
		})
		.then(done)
		.catch(done)
 	}, 200)

	it('POST a new article, verify you get back what you added', (done) => {
		var id;
		fetch(url('/article'), 
			{method:"POST", 
			headers:{"Content-Type": "application/json"},
			body : JSON.stringify( { text : "post article" } )})
		.then((res) => {
			expect(res.status).to.eql(200)	
			return res.json()
		})
		.then((body) => {
			expect(body.text).to.eql('post article')
		})
		.then(done)
		.catch(done)
 	}, 200)

	it('GET again and count the number verifying it increased by one', (done) => {
		fetch(url('/articles/'))
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.text()
		})
		.then(body => {
			expect(eval(body).length).to.at.eql(length + 1)
		})
		.then(done)
		.catch(done)
	}, 200)
});