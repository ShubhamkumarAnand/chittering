const fs = require('fs')
const http = require('http')
const displayContent = require('./routes')

const server = http.createServer(displayContent)

server.listen(3001)
fs.writeFileSync('myText.txt', 'Hello, Chittering App')
