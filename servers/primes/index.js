const express = require('express')
const Primes = require('./src/primes')

const app = express()
const PORT = 8080

app.get('/', (req, res) => res.send('Hello, World!'))

app.get('/primes', (req, res) => {
    const n = Number(req.query.n)
    console.log(n)
    const result = Primes.nPrimes(n)
    res.json({ result })
})

app.get('/palindromes', (req, res) => {
    const n = Number(req.query.n)
    console.log(n)
    const result = Primes.palandromicPrimes(n)
    res.json({ result })
})

app.listen(PORT, () =>
    console.log(`Numbers server listening on port ${PORT}...`)
)
