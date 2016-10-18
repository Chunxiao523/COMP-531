
const express = require('express')
const bodyParser = require('body-parser')
const cur_articles = [
	{
		id:1, author: 'scott', text: 'This is my first article'
	}, 
	{
		id:2, author: 'Chunxiao', text: 'This is my second article'
	}, 
	{
		id:3, author: 'CJ', text: 'This is my thrid article'}]
const addArticle = (req, res) => {
     console.log('Payload received', req.body)    
	 const newPayLoad = {id: req.body.id, author: req.body.author, text: req.body.text}
     cur_articles.push(newPayLoad)
     res.send(req.body)
}

const hello = (req, res) => res.send({ hello: 'world' })
const threeArticles = (req, res) => res.send(cur_articles)
const app = express()
app.use(bodyParser.json())
app.post('/article', addArticle)
app.get('/', hello)
app.get('/articles', threeArticles)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})