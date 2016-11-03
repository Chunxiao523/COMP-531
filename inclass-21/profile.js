const md5 = require('md5')
const db = []
const userdb = {username: '', salt: '', hash: ''}
var cookieKey = 'sid'
const putHeadlind = (req, res) => {
	res.send({ headlines: [{
		username: 'sep1',
		headline: req.body.headline || 'you did not supply it'
	}]})
}
const getUserHeadlines = (req, res) => {
	  res.send([
	{
		 user: 'scott', headline: 'This is my first article'
	}, 
	{
		 user: 'Chunxiao', headline: 'This is my second article'
	}, 
	{
		 user: 'CJ', headline: 'This is my thrid article'}])
}
const putEmail = (req, res) => {
	res.send({ headlines: [{
		username: 'sep1',
		email: req.body.email || 'you did not supply it'
	}]})
}
const getEmail = (req, res) => {
	  res.send([
	{
		user: 'scott', email: 'dfad@fdadfs.com'
	}, 
	{
		user: 'Chunxiao', email: 'dfad@fdadfs.com'
	}, 
	{
		user: 'CJ', email: 'dfad@fdadfs.com'}])
}
const putZipcode = (req, res) => {
	res.send({ headlines: [{
		username: 'sep1',
		zipcode: req.body.zipcode || 'you did not supply it'
	}]})
}
const getZipcode = (req, res) => {
	  res.send([
	{
		user: 'scott', zipcode: '77005'
	}, 
	{
		user: 'Chunxiao', zipcode: '77005'
	}, 
	{
		user: 'CJ', zipcode: '77005'}])
}
const putAvatar = (req, res) => {
	res.send({ headlines: [{
		username: 'sep1',
		avatar: req.body.avatar || 'you did not supply it'
	}]})
}
const getAvatar = (req, res) => {
	  res.send([
	{
		user: 'scott', avatar: 'https://www.baidu.com/'
	}, 
	{
		user: 'Chunxiao', avatar: 'https://www.baidu.com/'
	}, 
	{
		user: 'CJ', avatar: 'https://www.baidu.com/'}])
}
const addArticle = (req, res) => { 
	 const newPayLoad = {id: req.body.id, author: req.body.author, text: req.body.text}
     cur_articles.push(newPayLoad)
     res.send(req.body)
}
const register = (req, res) => {
		if (!req.body.username) {
			res.sendStatus(400)
			res.send('you should provide your username')
			return
		}
		if (!req.body.password) {
			res.sendStatus(400)
			res.send('you should provide your password')
			return
		}
		console.log(req.body.username)
		const password = req.body.password;
		const username = req.body.username;
		const salt = (Math.ceil(Math.random() * 1000000000)) + '';
		const hash = md5(salt + password)
		userdb.username = username;
		userdb.salt = salt;
		userdb.hash = hash;
		db.push(userdb)
		res.send(userdb)
}
const login = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	if (!username || !password) {
		res.sendStatus(400)
		res.send('bad request')
		return
	}
	const userObj = db.filter(function(v,i) {
		if(v.username == username) {
			return  true;
		}
	})
	if (userObj.length == 0) {
		res.send('this user does not exist')
		return
	}
	const salt = userObj[0].salt
	const hash = md5(salt + password)
	if (hash != userObj[0].hash) {
		res.sendStatus(401)
		res.send('password do not match')
		return
	}
	res.cookie(cookieKey, generateCode(), {maxAge: 3600*1000, httpOnly: true})
	var msg = {username: username, result: 'success'}
	res.send(msg)
}

const generateCode = () => {
	return Math.ceil(Math.random() *100)
}
const hello = (req, res) => res.send({ hello: 'world' })
module.exports = app => {
	 app.get('/', hello)
	 app.get('/articles')
	 app.post('/article', addArticle)
     app.put('/headline', putHeadlind)
     app.get('/headlines/:user?', getUserHeadlines)
     app.put('/email', putEmail)
     app.get('/email/:user?', getEmail)
     app.put('/zipcode', putZipcode)
     app.get('/zipcode/:user?', getZipcode)
     app.put('/avatar', putAvatar)
     app.get('/avatars/:user?', getAvatar)
     app.post('/register', register)
     app.post('/login', login)
}
