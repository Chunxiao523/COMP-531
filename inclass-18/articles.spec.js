/*
 * Test suite for articles.js
 */
const expect = require('chai').expect
const fetch = require('isomorphic-fetch')
const cur_articles = [
	{
		id:1, author: 'scott', text: 'This is my first article'
	}, 
	{
		id:2, author: 'Chunxiao', text: 'This is my second article'
	}, 
	{
		id:3, author: 'CJ', text: 'This is my thrid article'}]
const url = path => `http://localhost:3000${path}`

describe('Validate Article functionality', () => {

	it('should give me three or more articles', (done) => { //get test
		fetch(url('/articles'))
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.text()
		})
		.then(body => {
			expect(eval(body).length).to.at.least(3)
		})
		.then(done)
		.catch(done)
 	}, 200)

	it('should add two articles with successive article ids, and return the article each time', (done) => {
		// add a new article
		// verify you get the article back with an id
		// verify the content of the article
		// add a second article
		// verify the article id increases by one
		// verify the second artice has the correct content
		var id;
		fetch(url('/article'), 
			{method:"POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify({text:"first"})}) //the payload should be string
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.json()
		})
		.then(body => {
			id = body[eval(body).length - 1].id
			expect(body[eval(body).length - 1].id).to.eql(eval(body).length)
			expect(body[eval(body).length - 1].text).to.eql('first')
		})
		fetch(url('/article'), 
			{method:"POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify({text:"second"})}) //the payload should be string
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.json()
		})
		.then(body => {
			expect(body[eval(body).length - 1].id).to.eql(id + 1)
			expect(body[eval(body).length - 1].text).to.eql('second')
		})
		.then(done)
		.catch(done)
 	}, 200)

	it('should return an article with a specified id', (done) => {
		// call GET /articles first to find an id, perhaps one at random
		// then call GET /articles/id with the chosen id
		// validate that only one article is returned
		var random = Math.floor(Math.random()*3 + 1);
		fetch(url('/articles/' + random))
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.text()
		})
		.then(body => {
			expect(eval(body).length).to.eql(1)
		})
		.then(done)
		.catch(done)
	}, 200)

	it('should return nothing for an invalid id', (done) => {
		// call GET /articles/id where id is not a valid article id, perhaps 0
		// confirm that you get no results
		fetch(url('/articles/0'))
		.then(res => {
			expect(res.status).to.eql(200)	
			return res.text()
		})
		.then(body => {
			expect(body).to.eql('')
		})
		.then(done)
		.catch(done)
	}, 200)

});