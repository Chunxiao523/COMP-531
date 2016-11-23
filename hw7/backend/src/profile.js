var model = require('./model.js')
var cookieKey = 'sid'
var redis = require('redis').createClient("redis://h:p91e4gm8m4ug46do2tsgosn468k@ec2-184-73-208-210.compute-1.amazonaws.com:11209")

const putHeadlind = (req, res) => {
	model.Profile.findOne({username: req.body.username}).exec(function(err,user) {
			user.headline = req.body.headline
			user.save(function (err, data) {
				if (err) console.log(err);
				else {
					console.log('Saved : ', data )
					res.send({ username: req.body.username, headline: req.body.headline })
				}
		})
	})
}
const getUserHeadlines = (req, res) => {
	const usersName = req.params.users ? req.params.users.split(',') : [req.user]
	var headlines_ = []	
	model.Profile.find({}, function(err, users) {	
		if(req.params.users == null) {
			users.forEach(function(v, i) {
				if (v.username == req.body.username) {
					headlines_.push({username:v.username, headline: v.headline})
				}
			})	
			console.log("headline is " + headlines_)
			res.send({headlines: headlines_})
		}
		else {
			users.forEach(function(v, i) {
				usersName.forEach(function(value, index) {
					if (v.username == value) {
						headlines_.push({username:value, headline: v.headline})	
					}
				})
			})
			res.send({headlines: headlines_})
		}
	})	
}
const putEmail = (req, res) => {
	model.Profile.findOne({username: req.body.username}).exec(function(err,user) {
			user.email = req.body.email
			user.save(function (err, data) {
				if (err) console.log(err);
				else {
					console.log('Saved : ', data )
					res.send({ username: req.body.username, email: req.body.email })
				}
		})
	})
}
const getEmail = (req, res) => {//return the default email
	if(req.params.user == null) {
		model.Profile.findOne({username:req.body.username}, function(err, user) {
			res.send({username: req.body.username, email: user.email})
		})
	}else {
		model.Profile.findOne({username:req.params.user}, function(err, user) {
			res.send({username: req.params.user, email: user.email})
		})
	}
	
}
const putZipcode = (req, res) => {
	model.Profile.findOne({username: req.body.username}).exec(function(err,user) {
			user.zipcode = req.body.zipcode
			user.save(function (err, data) {
				if (err) console.log(err);
				else {
					console.log('Saved : ', data )
					res.send({ username: req.body.username, zipcode: req.body.zipcode })
				}
		})
	})
}
const getZipcode = (req, res) => {
	if(req.params.user == null) {
		model.Profile.findOne({username:req.body.username}, function(err, user) {
			res.send({username: req.body.username, zipcode: user.zipcode})
		})
	} else {
		model.Profile.findOne({username:req.params.user}, function(err, user) {
			res.send({username: req.params.user, zipcode: user.zipcode})
		})
	}
	
}
const putAvatar = (req, res) => {

	avatars[0].avatar = req.body.avatar
	res.send(avatars[0])
}
const getAvatar = (req, res) => {
	if(!req.params.user) {

		var avatar = []
		model.Profile.findOne({username:req.body.username}, function(err, user) {
			console.log(user)
			avatar.push({username: req.body.username, avatar: user.avatar})
			res.send({avatars: avatar})
		})
		
	} else {
		const usersName = req.params.user ? req.params.user.split(',') : [req.user]
		var avatar = []
		model.Profile.find({}, function(err, users) {
			console.log(typeof(users))
			users.forEach(function(v, i) {
				usersName.forEach(function(name, index) {
					if (v.username == name) {
						avatar.push({username: name, avatar: v.avatar})
					}
				})
			})
			console.log(req.params.user)
			res.send({avatars: avatar})
		})
	}
}

const getDob = (req, res) => {
	model.Profile.findOne({username: req.body.username}, function(err, user) {
		res.send({username: req.body.username, dob: user.dob})
	})
}

module.exports = app => {
      app.put('/headline',  putHeadlind)
      app.get('/headlines/:users?', getUserHeadlines)
 	  app.put('/avatar', putAvatar)
      app.get('/avatars/:user?',  getAvatar)
      app.put('/email', putEmail)
      app.get('/email/:user?',  getEmail)
      app.put('/zipcode',  putZipcode)
      app.get('/zipcode/:user?',  getZipcode)
      app.get('/dob',  getDob)
}
