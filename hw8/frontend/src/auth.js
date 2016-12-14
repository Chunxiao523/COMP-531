var cookieParser = require('cookie-parser')
var model = require('./model.js')
const md5 = require('md5')
var cookieKey = 'sid'
var redis = require('redis').createClient("redis://h:p91e4gm8m4ug46do2tsgosn468k@ec2-184-73-208-210.compute-1.amazonaws.com:11209")

var request = require('request')
var qs = require('querystring')
var express = require('express')


var session =require('express-session')
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;

const clientSecret = process.env.FACEBOOK_SECRET
const config = { clientID: '1686006728377236', 
		clientSecret: '518e0fb6cac8c91d8eda93eb33d5b09d', 
		callbackURL: 'https://hw-7.herokuapp.com/callback',
		passReqToCallback: true }

var FRONTEND;

const referer = (req, res, next) => {
	if (FRONTEND == undefined) {
		FRONTEND = req.headers.referer
	}
	next()
}

const login = (req,res) => {
	const username = req.body.username;
	const password = req.body.password;
	if (!username || !password) {
		res.sendStatus(400)
		res.send({message: 'bad request'})
		return
	}
	model.User.findOne({username: req.body.username}).exec(function(err,user) {
		if (user == null) {
			res.sendStatus(401)
		} else {
			const salt = user.salt
			const hash = md5(salt + password)
			if (hash == user.hash ) {
				var sid =  generateCode()
				redis.hmset(sid, user)
				res.cookie(cookieKey,sid, {maxAge: 3600*1000, httpOnly: true})
				res.send({username: username, result: 'success'})					
			}
			else {
				res.sendStatus(401)
			}
		}
	})
}
function fail (req, res) {
	res.send('fail')
}
function profile(req, res) {
	 res.redirect(FRONTEND)
}
function isLoggedIn(req,res, next) {	
	var sid=req.cookies[cookieKey]
	if(!sid) {
		if(req.isAuthenticated()){	
      		var name = false
      		model.User.find({}).exec((err, users) => {
      			users.forEach((user, index) => {
      				if (user.auth != undefined) {
      					user.auth.forEach((auth, i) => {
      						if (auth.Facebook == req.user.displayName) {
      							req.body.username = user.username
      							name = true
      							console.log("find", name)
      						}
      					})
      				}
      			})
		      		if (!name) {
		      			req.body.username = req.user.displayName + "@Facebook"
		      		}
		      		next()
      		})
      		//req.body.username = req.user.displayName + "@Facebook"
      		
    	} else {
    		return res.sendStatus(401)
    	}	
	} else {
		redis.hgetall(sid, function(err, elem) {
		if (elem) {
			req.body.username = elem.username 
			next()
		} else {
			if(req.isAuthenticated()){
	          req.body.username = req.user.displayName+"@Facebook"
	          model.User.find({}).exec((err, users) => {
      			users.forEach((user, index) => {
      				if (user.auth != undefined) {	
      					user.auth.forEach((auth, i) => {
      						if (auth == req.user.displayName) {
      							req.body.username = user.username
      						}
      					})
      				}
      			})
      		})
	          return next()
        	}
	        else{
	          console.log('Redis Unauthorized', req.username)
	          res.status(401).send("unauthorized")
	        }
		}
	})}
}

const logout = (req, res) => {
	var sid = req.cookies[cookieKey]
	res.clearCookie(cookieKey)
	//req.sid.destroy(()=>{res.send('you have loged out')})
	req.sid = ''
//	redis.del(sid)
	if(req.isAuthenticated()) {
		req.logout()
	}
	console.log("you have logged out")
	res.send({message: 'You have logged out'})
}

const register = (req, res) => {
		if (!req.body.username) {
			res.sendStatus(400)
			return
		}
		if (!req.body.password) {
			res.sendStatus(400)
			return
		}
		model.User.find({username: req.body.username}).exec(function(err, users) {
			if(users.length >= 1) {
				res.sendStatus(400).send({message: "Username already exists, try another one"})
			} else {
				const password = req.body.password;
				const username = req.body.username;
				const salt = (Math.ceil(Math.random() * 1000000000)) + '';
				const hash = md5(salt + password)
				var newUser = new model.User({username: username, salt: salt, hash: hash, auth_id: null, auth: []});
				newUser.save(function (err, data) {
					if (err) console.log(err);
					else console.log('Saved : ', data );
				});
				var newProfile = new model.Profile({
					username: username,
		    		headline: 'become web developer',
		    		following: [],
		    		email: req.body.email,
		    		zipcode: req.body.zipcode,
		    		avatar: "http://img2.imgtn.bdimg.com/it/u=1670290795,2435925643&fm=21&gp=0.jpg",
		    		dob: req.body.bob   
		    	})
		    	newProfile.save(function (err, data) {
					if (err) console.log(err);
					else {
						console.log('Saved : ', data );
						res.send({ result: 'success', username: username})
					}
				});
			 
			}
		})
}

const changepassword = (req, res) => {
	const username = req.body.username
	const newpassword = req.body.password
	model.User.findOne({username: username}).exec(function(err,user) {
			const newsalt = (Math.ceil(Math.random() * 1000000000)) + '';
			const newhash = md5(newsalt + newpassword)
			user.salt = newsalt
			user.hash = newhash
			user.save(function (err, data) {
				if (err) console.log(err);
				else {
					console.log('Saved : ', data )
					res.send('you have changed your password')
				}
		});
	})
}

const generateCode = () => {
	return Math.ceil(Math.random() *100)
}

const link = (req, res) => {
	const username = req.body.pwusername;
	const password = req.body.pwpassword;
	if (!username || !password) {
		res.sendStatus(400)
		res.send({message: 'You should provide enough information'})
		return
	}
	model.User.findOne({username: username}).exec(function(err,user) {
		if (user == null) {
			res.send({message: "This user does not exist"})
		} else {
			const salt = user.salt
			const hash = md5(salt + password)
			if (hash == user.hash ) {
				model.Article.update({author: req.body.username}, {$set: {'author': username}}, { new: true, multi:true },function(){})
				model.Article.update({'comments.author': req.body.username}, {$set: {'comments.$author': username}},{ new: true, multi:true },function(){})
				model.Comment.update({author:req.body.username}, { $set: { 'author': username}}, { new: true, multi:true }, function(){})
				model.Profile.findOne({username: req.body.username}).exec(function(err, profile){
					if(profile){
						model.Profile.findOne({username: username}).exec(function(err, pwprofile) {
							if(pwprofile){
								const newFollowings = pwprofile.following.concat(profile.following)
								model.Profile.update({username: username}, {$set: {'following': newFollowings}}, function(){})
							}
						})
						model.Profile.update({username: req.username}, {$set: { 'following':[]}}, function(){})
					}
				})		
				model.User.findOne({username: username}).exec(function(err, user){
				if(user){
					const name = req.body.username.split('@');
					const elem = {}
					elem[name[1]] = name[0]
					model.User.update({username: username}, {$addToSet: {'auth': elem}}, {new: true}, function(){})
				}
			})
			} else {
				res.sendStatus(401)
			}
		}
	})

}

const unlink = (req, res) => {
	const username = req.body.username

	model.User.findOne({username: username}).exec(function(err, user){
		console.log("unlink user", user)
		if(user.auth.length !== 0){
			model.User.update({username: username}, {$set: {auth: []}}, {new: true}, function(){
				res.status(200).send({result: 'unlink successfully'})
			})
		} else {
			res.status(400).send("cannot unlink since there is no account linking with it")
		}
	})
}

const users = {};
passport.serializeUser(function(user, done) {
	users[user.id] = user
	done(null, user.id)
})
passport.deserializeUser(function(id, done) {
	var user = users[id]
	done(null, user)
})

passport.use(new FacebookStrategy(config,
 function(req, token, refreshToken, profile, done) {
 	var found = false
 		const username = profile.displayName + "@Facebook"
 		const sid=req.cookies[cookieKey]
 		if (!sid) {		
		 			model.User.findOne({username: profile.displayName + "@Facebook"}).exec((err,user) => {
		 			if (user === null) {
		 				new model.User({
		 					username: profile.displayName + "@Facebook",
		 					hash: null,
		 					salt: null,
		 	
		 				}).save()
		 				new model.Profile({
		 					username: profile.displayName + "@Facebook",
		 					headline: "",
		 					dob: null,
		 					following: [ ],
		                    email: null,
		                    zipcode: null,
		                    avatar: "http://img2.imgtn.bdimg.com/it/u=1670290795,2435925643&fm=21&gp=0.jpg"
		 				}).save()
	
		 		}})
		 			return done(null, profile)
 		} else {
 			redis.hgetall(sid, function(err, elem) {

				const name = elem.username
				
				model.Article.update({author:username}, { $set: { 'author': name}}, { new: true , multi:true}, function(){})
				
				model.Article.update({'comments.author' : username}, { $set: {'comments.$.author': name}}, { new: true , multi:true}, function(){})
				
				model.Comment.update({author:username}, { $set: { 'author': name}}, { new: true , multi:true}, function(){})
				
				model.Profile.findOne({username: username}).exec(function(err, profile){
					if(profile){
						model.Profile.findOne({username: name}).exec(function(err, pwprofile) {
							if(pwprofile){
								//const newprofile = pwprofile.following.concat(profile.following)
								model.Profile.update({username: name}, {$set: {'following': pwprofile.following.concat(profile.following)}}, function(){})
							}
						})
					}
				})
				model.User.findOne({username: name}).exec(function(err, user){
					if(user){
						const elem = {}
						elem["Facebook"] = profile.displayName
						model.User.update({username: name}, {$addToSet: {'auth': elem}}, {new: true}, function(){})
					}
				})
				console.log("your fb account is linked")
			})
			return done(null, profile)
		}		 		
 	}))

module.exports = app => {
	app.use(cookieParser())

	app.post('/register', register)
	app.post('/login', login)
	app.use(session({secret:'thisIsMySecretMessage', resave: false, saveUninitialized: false}))
	// app.use(session({secret: 'thisIsMySecretMessage'}))
	app.use(passport.initialize());
    app.use(passport.session());
    app.use(referer)
	app.use('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}))
	app.use('/callback', passport.authenticate('facebook', {
			successRedirect:'/profile', failureRedirect: '/fail'}))
	app.use('/fail', fail)

	app.use(isLoggedIn)
	app.use('/profile', profile)
	app.put('/logout', logout)
	app.put('/password', changepassword)
	app.post('/link', link)
	app.get('/unlink', unlink)
}