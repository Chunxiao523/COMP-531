var model = require('./model.js')
var cookieKey = 'sid'
var redis = require('redis').createClient("redis://h:p91e4gm8m4ug46do2tsgosn468k@ec2-184-73-208-210.compute-1.amazonaws.com:11209")
const getFollowing = (req, res) => {
	if(req.params.user == null) {
		
		model.Profile.findOne({username: req.body.username}, function(err, user) {	
			res.send({username: req.body.username, following: user.following})
		})
	} else {
		model.Profile.findOne({username: req.params.user}, function(err, user) {	
			res.send({username: req.params.user, following: user.following })	
		})
	}	
}

const putFollowing = (req, res) => {
	var exist = false
	model.User.findOne({username: req.params.user}, function(err, follower) {
		console.log(follower)
		if (follower == null) {
			res.sendStatus(406)
		}else {
			model.Profile.findOne({username: req.body.username}, function(err, user) {	
			user.following.forEach(function(v, i) {
				if(v == req.params.user && exist == false) {
					exist = true
					res.send({message: 'this user has already in your following list'})
				} 		
			})	
			if (exist == false) {
				user.following.push(req.params.user)
						user.save(function(err,data) {
							if(err) console.log(err)
								else {
									console.log('Saved: ', data)
									res.send({username: req.body.username, following: user.following})
								}
					})
				}	
			})
		}

	})
	
}
const deleteFollowing = (req, res) => {
	var deleteFollower = false
	model.Profile.findOne({username: req.body.username}, function(err, user) {	
		user.following.forEach(function (v, i) {
			if (v == req.params.user && deleteFollower == false) {
				deleteFollower = true
				user.following.splice(i,1)
				user.save(function(err, data) {
					if(err) console.log(err)
						else {
							console.log('Save: ', data)
							res.send({username: req.params.user, following: user.following})
						}
				})
			}
		})
		if (deleteFollower == false) {
			res.send({message: 'this user does not exist'})
		}
	})
}

module.exports = app => {
	app.get('/following/:user?',  getFollowing)
	app.put('/following/:user',  putFollowing)
	app.delete('/following/:user',  deleteFollowing)
}