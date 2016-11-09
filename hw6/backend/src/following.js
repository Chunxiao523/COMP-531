const following = [
{
	name:'Chunxiao'
},
{
	name:'CJ'
},
{
	name:'ZT'
}]


const getFollowing = (req, res) => {
	res.send(following)
}

const putFollowing = (req, res) => {
	following.push({name: req.body.name})
	res.send(following)
}
const deleteFollowing = (req, res) => {
	// following.filter(function (elem, pos) {
	// 	if (elem.name == req.name) {

	// 		following.slice(pos)
	// 	}
	// })
	res.send('deleted')
}
module.exports = app => {
	app.get('/following', getFollowing)
	app.put('/following', putFollowing)
	app.delete('/following', deleteFollowing)
}