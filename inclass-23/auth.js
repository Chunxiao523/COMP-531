var request = require('request')
var qs = require('querystring')
var express = require('express')
var cookieParser = require('cookie-parser')
var session =require('express-session')
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;

app= express()
app.use(session({secret: 'thisIsMySecretMessage'}))
app.use(passport.session())
app.use(cookieParser())

const clientSecret = process.env.FACEBOOK_SECRET
const config = { clientSecret: '1686006728377236', 
		clientID: '518e0fb6cac8c91d8eda93eb33d5b09d', 
		callbackURL: 'http://localhost:3000/auth/callback' }
//const user = [{username: 'cz31', password: '123'}]

const login = (req,res) => {
	user.filter(function(elem, pos) {
		if (req.body.username == elem.username && req.body.password == elem.password) {
			res.send('you have successively loged in')
		}
	})
		res.send('Login failed, check your username or password')
}

// const logout = (req, res) => {
// 	res.send('you have loged out')
// }

const register = (req, res) => {
	user.push({username: req.body.username, password: req.body.password})
	console.log(user)
	res.send('you have registered')
}

const changepassword = (req, res) => {
	user.filter(function(elem, pos) {
		if (elem.username == req.body.username) {
			elem.password = req.body.password
		}
	})
	console.log(user)
	res.send('you have modified your password')
}

const fbLogin = (req, res) => {

}

const users = {}
//strategies 是对验证方式的封装
// serilarize the user for the session
passport.serializeUser(function(user, done) {
	users[user.id] = user
	done(null, user.id)
})
//deserialize the user from the session
passport.deserializeUser(function(id, done) {
	var user = users[id]
	done(null)
})
passport.use(new FacebookStrategy(config,
 function(token, refreshToken, profile, done) {
 	process.nextTick(function() {
 		//register the user in our system
 		return done(null, profile)
 	})
 }))

function logout(req, res) {
	req.logout();
	res.redirect('/')
}

function isLoggedIn(req, res, next) {
	if (req.isAuthentichated()) {
		next()
	} else {
		res.redirect('login')
	}
}

function profile(req, res) {
	res.send('OK, NOW WHAT?', req.user)
}
function fail (req, res) {
	res.send('fail')
}
function hello (req, res) {
	res.send('hello')
}
module.exports = app => {
	app.post('/login', login)
	app.put('/logout', logout)
	app.post('/register', register)
	app.put('/password', changepassword)
	app.use('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}))
	app.use('/callback', passport.authenticate('facebook', {
			successRedirect:'/profile', failureRedirect: '/fail'}))
	app.use('/profile',isLoggedIn, profile)
	app.use('/fail', fail)
	//app.use('/logout',logout)
	app.use('/', hello)
}