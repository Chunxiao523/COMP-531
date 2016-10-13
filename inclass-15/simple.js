var http = require('http')

var host = '127.0.0.1'
var port = 3333

http.createServer(preprocess).listen(port, host)
console.log('Server running at http://' + host + ':' + port)

function preprocess(req, res) { //between request and processing, middleware, create the body, payload
     var body = ''
     req.on('data', function(chunk) { //data comes into it 
          body += chunk
     })
     req.on('end', function() {
          req.body = body
          server(req, res)
     })
}

function server(req, res) {
     console.log('Request method        :', req.method)
     console.log('Request URL           :', req.url)
     console.log('Request content-type  :', req.headers['content-type'])
     console.log('Request payload       :', req.body)
      if (req.method == 'GET' && req.url == '/articles') {
          var payload = { 'articles': [ { 'id':'1', 'author': 'Scott', 'body': 'A post' },
          { 'id':'2', 'author': 'Angel', 'body': 'A second post' }, 
          { 'id':'3', 'author': 'Lucky', 'body': 'A third post' }] } //payload send back
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(JSON.stringify(payload))
     } else if (req.method == 'GET') {
          var payload = { 'hello': 'world' } //payload send back
          res.setHeader('Content-Type', 'application/json') //内容类型
          res.statusCode = 200
          res.end(JSON.stringify(payload))
     } else if (req.method == 'POST' && req.url == '/login') {
          var payload = { 'username': JSON.parse(req.body).username, 'result':  'success'} //payload send back
          res.setHeader('Content-Type', 'application/json') //内容类型
          res.statusCode = 200
          res.end(JSON.stringify(payload))
     } else if(req.method == 'PUT' && req.url == '/logout') {
          var payload = 'OK' //payload send back
          res.setHeader('Content-Type',  'text/plain') //内容类型
          res.statusCode = 200
          res.end(JSON.stringify(payload))
     } else {
          console.log('error');
          var payload = 'error' //payload send back
          res.setHeader('Content-Type',  'text/plain') //内容类型
          res.statusCode = 200
          res.end(JSON.stringify(payload))
     }
    
}