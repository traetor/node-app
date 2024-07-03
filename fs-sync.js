const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('first.txt', 'utf8')

writeFileSync(
    './result.txt',
    `Here is the result : ${first}`,
    { flag: 'a' }
)