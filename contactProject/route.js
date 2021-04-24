const router = require('express').Router()

const { getAllContact,
       getSingleContact,
       createNewContact,
       updateContact,
       deleteContact } = require('./routeHandler')

router.get('/', getAllContact)

router.get('/:Id', getSingleContact)

router.post('/', createNewContact)

router.put('/:Id', updateContact)

router.delete('/:Id', deleteContact)

module.exports = router;