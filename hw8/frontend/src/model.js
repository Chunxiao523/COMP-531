// this is model.js 
var mongoose = require('mongoose')
require('./db.js')

var commentSchema = new mongoose.Schema({
	commentId: Number, author: String, date: Date, text: String
})
var articleSchema = new mongoose.Schema({
	author: String, img: String, date: Date, text: String,
	comments: [ commentSchema ], img: String
})

var userSchema = new mongoose.Schema({
	username: String, salt: String, hash:String, auth_id: String, auth: []
})

var profileSchema = new mongoose.Schema({
    username: String,
    headline: String,
    following: [ String ],
    email: String,
    zipcode: String,
    avatar: String,
    dob: Date    
})
exports.Comment = mongoose.model('comment', commentSchema)
exports.Article = mongoose.model('article', articleSchema)
exports.User = mongoose.model('users', userSchema)
exports.Profile = mongoose.model('profile', profileSchema)

