const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const db = require('./app/models')

//parse requests of content-type 'application/json
app.use(express.json())

//parse requests of content-type 'application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

mongoose.connect(db.url)
.then(() => {
    console.log('connected to the database!')
})
.catch(err =>  {
    console.log('Cannot connect to the database!', err)

})

require('./app/routes/student.routes')(app)


app.listen(PORT,() => console.log(`Server started on port ${PORT} `))