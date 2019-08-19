const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    helmet = require('helmet')
morgan = require('morgan')


app = express()
app.use(helmet())
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


mongoose.connect('mongodb+srv://dragonus:dragonus@cluster0-picr7.mongodb.net/boteco?retryWrites=true', {
    useNewUrlParser: true,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

app.listen(3333)