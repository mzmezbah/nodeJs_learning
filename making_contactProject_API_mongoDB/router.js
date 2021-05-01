const Router = require('express').Router()
const {
    getAllContact,
    getSingleContact,
    createContact,
    updateContactById,
    deleteContactById
} = require('./handler')

Router.get('/', getAllContact)
Router.get('/:id', getSingleContact)
Router.post('/', createContact)
Router.put('/:id', updateContactById)
Router.delete('/:id', deleteContactById)

module.exports = Router