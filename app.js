const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 2000

app.use(cors())
app.use(bodyParser.json())

app.set('view engine', 'ejs')

const get_route = require('./router')
const route_collection = get_route()

app.use(route_collection)

app.listen(port, () => {
    console.log('Hello world!')
})