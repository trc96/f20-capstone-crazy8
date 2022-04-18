const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.static('public'))
app.use(cors)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.post('/', (req, res) => {
    let { userQuestion, eightballResponse } = req.body
    let newQuestion = {
        userQuestion: userQuestion,
        eightballResponse: eightballResponse
    }

    saved.push(newQuestion)
    res.status(200).send(saved)
})

const PORT = process.env.PORT || 5500

app.listen(PORT, () => { console.log(`listening on ${PORT}`)})