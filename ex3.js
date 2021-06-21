const http = require('http')
const port = 3000

const server = http.createServer()

server.on("request", (req, res) => {
    res.end("Olá do node!")
})

server.listen(port)

