const Router = require('express').Router()
const {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContactById,
    deleteContactById
} = require('./handler')

Router.get('/', getAllContacts)
Router.get('/:id', getSingleContact)
Router.get('/delete/:id', deleteContactById)
Router.post('/', createContact)
Router.put('/:id', updateContactById)
// Router.delete('/:id', deleteContactById)

module.exports = Router