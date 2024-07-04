const { writeFileSync } = require('fs')

for (let i = 0; i < 10; i++) {
    writeFileSync('./big.txt', `Write ${i}\n`, { flag: 'a' })
}