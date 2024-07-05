const { writeFileSync } = require('fs')

for (let i = 0; i < 5; i++) {
    writeFileSync('./content/big.txt', `Write ${i}\n`, { flag: 'a' })
}