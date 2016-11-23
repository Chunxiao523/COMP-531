var model = require('./model.js')
var cookieKey = 'sid'
var redis = require('redis').createClient("redis://h:p91e4gm8m4ug46do2tsgosn468k@ec2-184-73-208-210.compute-1.amazonaws.com:11209")
var isLoggedIn = require('./auth.js')
const addArticle = (req,res) => {
	var count 
		model.Article.find({}, function(err,articles) {
			var userarticles = []
			count = articles.length
			var newArticle = new model.Article({id: count + 1, author: req.body.username, image: null, date: new Date(), text: req.body.text, comment: []});
			newArticle.save(function (err, data) {
					if (err) console.log(err);
					else {
						console.log('Saved : ', data );
						res.send({articles: newArticle})
					}
				});
			})
}

const getArticles = (req,res) => {
	var followers 
	var userarticles = []
	model.Profile.findOne({username:req.body.username}, function(err, user) {
		model.Article.find({}, function(err, articles) {
			articles.forEach(function(value, index) {
				if(value.author == req.body.username) {
					userarticles.push(value)
				}
				user.following.forEach(function(elem, pos) {				
					if (value.author == elem ) {
						userarticles.push(value)
					} 
				})
			})
			
			if(req.params.id == null) {
				res.send({articles:userarticles})
			} else {
				var selectedarticles = []
				userarticles.forEach(function(elem,pos) {
				if(elem._id == req.params.id) {
					selectedarticles.push(elem)
					res.send({articles: selectedarticles})
					}
				})
			}
		})
	})
}

const putArticle = (req, res)=> {
	if (req.body.commentId == null) {
		model.Article.findOne({_id: req.params.id}).exec(function(err, article) {
			console.log(article)
			if (article == null) {
				res.sendStatus(403).send({message: 'cannot find this article'}) //Forbidden if the user does not own the article
			}else {
				console.log("body content" + req.body.text)
				article.text = req.body.text
				article.save(function (err, data) {
				if (err) console.log(err);
				else {
					console.log('Saved : ', data )
					res.send({articles: article})
				}
			})
			}
		}) 
	} else { 
		model.Article.findOne({_id: req.params.id}).exec(function(err, article) {
			if (req.body.commentId == -1) {
						var newComment = new model.Comment({commentId: article.comments.length + 1, author: req.body.username, date: new Date(), text: req.body.text})
						article.comments.push(newComment)
						article.save(function(err, data) {
						if (err) console.log(err);
						else {
							console.log('Saved : ', data )
							res.send({articles: article})
						}
					})
			} else {
				var modified = false
				article.comments.forEach(function(v, i) {
					if(v.commentId == req.body.commentId && modified == false) {
						modified = true
						v.text = req.body.text
						article.save(function(err, data) {
							if (err) console.log(err);
							else {
								console.log('Saved : ', data )
								res.send({articles: article})
							}
						})	
					}
				})
				if (!modified) {
					res.send({message: "this comment does not exist"})
				}
			}
		})
	}
}


module.exports = app => {
	 app.post('/article', addArticle)
     app.get('/articles/:id?', getArticles)
     app.put('/articles/:id', putArticle)
}




