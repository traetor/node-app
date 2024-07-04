let http = require('http')
let fs = require('fs')

http.createServer(function (req, res) {
    const text = fs.readFileSync('./big.txt', 'utf8')
    res.end(text)
    const fileStream = fs.createReadStream('./big.txt', 'utf8')

    fileStream.on('open', () => {
        fileStream.pipe()
    })

    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)