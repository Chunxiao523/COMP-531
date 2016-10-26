
const cur_articles = [
	{
		id:1, author: 'scott', text: 'This is my first article'
	}, 
	{
		id:2, author: 'Chunxiao', text: 'This is my second article'
	}, 
	{
		id:3, author: 'CJ', text: 'This is my thrid article'}]
const addArticle = (req, res) => {
     console.log('Payload received', req.body)    
	 const newPayLoad = {id: cur_articles.length +1, author: 'Chunxiao', text: req.body.text}
     cur_articles.push(newPayLoad)
     res.send(cur_articles)
}


const getArticles = (req, res) => {
	if(req.url == "/articles") {
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
module.exports = app => {
     app.post('/article', addArticle)
     app.get('/articles/:id?', getArticles)
}
