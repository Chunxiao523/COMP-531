var model = require('./model.js')
const md5 = require('md5')
var cookieKey = 'sid'
var redis = require('redis').createClient("redis://h:p91e4gm8m4ug46do2tsgosn468k@ec2-184-73-208-210.compute-1.amazonaws.com:11209")

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

function isLoggedIn(req,res, next) {
	var sid=req.cookies[cookieKey]
	if(!sid) {
		return res.sendStatus(401)
	}
	redis.hgetall(sid, function(err, elem) {
		if (elem != null) {
			console.log(sid + ' mapped to ' + elem.username)
			req.body.username = elem.username
			next()
		} else {
			res.sendStatus(401)
		}
	})	
}
const logout = (req, res) => {
	var sid = req.cookies[cookieKey]
	res.clearCookie(cookieKey)
	//req.sid.destroy(()=>{res.send('you have loged out')})
	req.sid = ''
	redis.del(sid)
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
				var newUser = new model.User({username: username, salt: salt, hash: hash});
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
module.exports = app => {
	app.post('/register', register)
	app.post('/login', login)
	app.use(isLoggedIn)
	app.put('/logout', logout)
	app.put('/password', changepassword)
	
}