const {readFile, writeFile} = require('fs')

readFile('./first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        writeFile(
            './result.txt',
            `Here is the result : ${first}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})