const express = require('express')

const app = express()

app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Back End is running well'
    })
})

app.use('/', require('./src/routes'))

app.post('/', (req, res) => {
    console.log(req.body);
    return res.json({
        success: true,
        message: 'Posted data success to send'
    })
})

app.use('*', (req, res)=>{
    return res.status(404).send({
        success: false,
        message: 'Resource not found'
    })
})

app.listen(3333, () => {
    console.log(`App is running on port 3333`);
})