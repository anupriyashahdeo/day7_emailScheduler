const express = require('express')
const app = express()
const scheduler = require('node-cron');
const { transporter, options } = require('./services/email');
const port = 3000
scheduler.schedule("* * * * *", () => {
    console.log("sending email");

    transporter.sendMail(options, (error, info) => {
        if (error) {
            console.error(error)
        }
        console.log("email is  sent with  info", info)
    }
    )
})


// app.get('/', (req, res) => {
//     res.send('')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})