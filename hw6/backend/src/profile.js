
/**
*Initial headlines array
*/
const headlines = [
	{
		 user: 'scott', headline: 'This is my first article'
	}, 
	{
		 user: 'Chunxiao', headline: 'This is my second article'
	}, 
	{
		 user: 'CJ', headline: 'This is my thrid article'}]
const emails = [{
		user: 'scott', email: 'dfad@fdadfs.com'
	}, 
	{
		user: 'Chunxiao', email: 'dfad@fdadfs.com'
	}, 
	{
		user: 'CJ', email: 'dfad@fdadfs.com'}]
const zipcodes = [
	{
		user: 'scott', zipcode: '77005'
	}, 
	{
		user: 'Chunxiao', zipcode: '77005'
	}, 
	{
		user: 'CJ', zipcode: '77005'}]
const avatars = [
	{
		user: 'scott', avatar: 'https://www.baidu.com/'
	}, 
	{
		user: 'Chunxiao', avatar: 'https://www.baidu.com/'
	}, 
	{
		user: 'CJ', avatar: 'https://www.baidu.com/'}]

const putHeadlind = (req, res) => {
	headlines[0].headline = req.body.headline
	res.send(headlines[0])
}
const getUserHeadlines = (req, res) => {
	if(!req.params.user) {
		res.send(headlines[0])
	} else {
		res.send(headlines.filter(function(elem, pos) {
				if(elem.user == req.params.user){
					return elem
				}
			}))
	}
	  
}
const putEmail = (req, res) => {
	emails[0].email = req.body.email
	res.send(emails[0])
}
const getEmail = (req, res) => {//return the default email
	if(!req.params.user) {
		res.send(emails[0])
	} else {
		res.send(emails.filter(function(elem, pos) {
				if(elem.user == req.params.user){
					return elem
				}
			}))
	}
}
const putZipcode = (req, res) => {
	zipcodes[0].zipcode = req.body.zipcode
	res.send(zipcodes[0])
}
const getZipcode = (req, res) => {
	if(!req.params.user) {
		res.send(zipcodes[0])
	} else {
		res.send(zipcodes.filter(function(elem, pos) {
				if(elem.user == req.params.user){
					return elem
				}
			}))
	}
}
const putAvatar = (req, res) => {
	avatars[0].avatar = req.body.avatar
	res.send(avatars[0])
}
const getAvatar = (req, res) => {
	  if(!req.params.user) {
		res.send(avatars[0])
	} else {
		res.send(avatars.filter(function(elem, pos) {
				if(elem.user == req.params.user){
					return elem
				}
			}))
	}
}

const getDob = (req, res) => {
	res.send('return dob')
}
module.exports = app => {
     app.put('/headline', putHeadlind)
     app.get('/headlines/:user?', getUserHeadlines)
 	 app.put('/avatar', putAvatar)
     app.get('/avatars/:user?', getAvatar)
     app.put('/email', putEmail)
     app.get('/email/:user?', getEmail)
     app.put('/zipcode', putZipcode)
     app.get('/zipcode/:user?', getZipcode)
     app.get('/dob', getDob)
}
