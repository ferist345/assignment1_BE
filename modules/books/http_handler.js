const express = require('express')
const router = new express.Router()
const repo_books = require('../books/repositories')

router.get('/books', (req, res) => {
    repo_books.get_all_books(req, res)
})

router.get('/books/:id', (req, res) => {
    const id = req.params.id
    repo_books.get_books_by_id(req, res, id)
})

router.get('/ejs/books', (req, res) => {
    repo_books.view_books(req, res)
})

module.exports = router