const user = [{username: 'cz31', password: '123'}]

const login = (req,res) => {
	user.filter(function(elem, pos) {
		if (req.body.username == elem.username && req.body.password == elem.password) {
			res.send('you have successively loged in')
		}
	})
		res.send('Login failed, check your username or password')
}

const logout = (req, res) => {
	res.send('you have loged out')
}

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


module.exports = app => {
	app.post('/login', login)
	app.put('/logout', logout)
	app.post('/register', register)
	app.put('/password', changepassword)
}