
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
module.exports = app => {
     app.put('/headline', putHeadlind)
     app.get('/headlines/:user?', getUserHeadlines)
     app.put('/email', putEmail)
     app.get('/email/:user?', getEmail)
     app.put('/zipcode', putZipcode)
     app.get('/zipcode/:user?', getZipcode)
     app.put('/avatar', putAvatar)
     app.get('/avatars/:user?', getAvatar)
}
