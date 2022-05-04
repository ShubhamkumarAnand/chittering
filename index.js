const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type','text/html')
  res.write('cheeseburger')
  res.end()
  console.log('Joined')
})

server.listen(3001)
fs.writeFileSync('myText.txt', 'Hello, Chittering App')
