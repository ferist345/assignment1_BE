const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'../../books.json')

const get_all_books = (req, res) => {
    try {
        const dataRaw = fs.readFileSync(filePath)
        const data = JSON.parse(dataRaw)

        if(dataRaw){
            res.status(200).send(data)
        } else {
            res.status(200).send(null)
        }
    } catch (err) {
        res.status(500).send({
            message:"Internal server error"+err,
            status:'failed'
        })
    }
}

const get_books_by_id = (req, res, id) => {
    try {
        const dataRaw = fs.readFileSync(filePath)
        const data = JSON.parse(dataRaw)
        let dataRes = []

        data.forEach(el => {
            if(el.id == id){
                dataRes.push(el)
                return
            }
        }); 

        if(dataRes.length > 0){
            res.status(200).send(dataRes[0])
        } else {
            res.status(200).send(null)
        }
    } catch (err) {
        res.status(500).send({
            message:"Internal server error"+err,
            status:'failed'
        })
    }
}

const view_books = (req, res) => {
    try {
        const dataRaw = fs.readFileSync(filePath)
        const data = JSON.parse(dataRaw)

        res.render('booksPage', {data})
    } catch (err) {
        res.status(500).send({
            message:"Internal server error"+err,
            status:'failed'
        })
    }
}

module.exports = {
    get_all_books,
    get_books_by_id,
    view_books
}