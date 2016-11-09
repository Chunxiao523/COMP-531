const cur_articles = [
	{
		id:1, author: 'scott', text: 'This is my first article', date: '2016-11-1', comments: []
	}, 
	{
		id:2, author: 'Chunxiao', text: 'This is my second article', date: '2016-11-1', comments: []
	}, 
	{
		id:3, author: 'CJ', text: 'This is my thrid article', date: '2016-11-1', comments: []}]
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
/**
*Default function
*/ 
const hello = (req, res) => res.send({ hello: 'world' })
const addArticle = (req, res) => {
     console.log('Payload received', req.body)    
	 const newPayLoad = {id: cur_articles.length +1, author: 'Chunxiao', text: req.body.text, date: new Date(), comment: []}
     cur_articles.push(newPayLoad)
     res.send(newPayLoad)
}
const getArticles = (req, res) => {
	if(req.url == "/articles/" || req.url == "/articles") {
		res.send(cur_articles)
	} else {
		if (req.params.id == 0 || req.params.id > cur_articles.length) {
			res.send(null);
		} else {
			res.send(cur_articles.filter(function(elem, pos) {
				if(elem.id == req.params.id){
					return elem
				}
			}))
		}
	}
}
const putHeadlind = (req, res) => {
	res.send({ headlines: [{
		username: 'sep1',
		headline: req.body.headline || 'you did not supply it'
	}]})
}
const getUserHeadlines = (req, res) => {
	if(req.url == "/headlines") {
		res.send(headlines[0])
	} else {
		res.send(headlines.filter(function(elem, pos) {
				if(elem.user == req.params.user){
					return elem
				}
			}))
	}
	  
}
module.exports = app => {
	 app.get('/', hello)
	 app.post('/article', addArticle)
     app.get('/articles/:id?', getArticles)
     app.put('/headline', putHeadlind)
     app.get('/headlines/:user?', getUserHeadlines)
}
