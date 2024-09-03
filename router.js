const express = require('express')
const app = express()

const get_route = () => {
    const routerBook = require('./modules/books/http_handler')
    
    app.use(routerBook)
    
    return app
}

module.exports = get_route