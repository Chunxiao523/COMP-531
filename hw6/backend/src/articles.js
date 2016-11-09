const cur_articles = [
	{
		id:1, author: 'scott', text: 'This is my first article', date: '2016-11-1', comments: []
	}, 
	{
		id:2, author: 'Chunxiao', text: 'This is my second article', date: '2016-11-1', comments: []
	}, 
	{
		id:3, author: 'CJ', text: 'This is my thrid article', date: '2016-11-1', comments: []}]
const addArticle = (req, res) => {
     console.log('Payload received', req.body)    
	 const newPayLoad = {id: cur_articles.length +1, author: 'Chunxiao', text: req.body.text, date: new Date(), comment: []}
     cur_articles.push(newPayLoad)
     res.send(newPayLoad)
}
const getArticles = (req, res) => {
	if(!req.params.id) {
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
const putArticle = (req, res)=> {
		cur_articles[req.body.id - 1].text = req.body.text
		res.send(cur_articles[req.body.id - 1])
}
module.exports = app => {
	 app.post('/article', addArticle)
     app.get('/articles/:id?', getArticles)
     app.put('/articles', putArticle)
}