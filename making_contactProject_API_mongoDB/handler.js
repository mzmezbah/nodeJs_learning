const Contact = require('./contactSchema')

exports.getAllContacts = (req, res) => {
    //here we do quires to find out all data from database by using quires system in mongoose like under

    //here this 'find' query method return a promise

    Contact.find()
        .then(contacts => {
            res.render('index', {contacts})
        })
        .catch((err) => {
            console.log(err)
            res.json({
                message : 'error Occurred'
            })
        })
}

exports.getSingleContact = (req, res) => {
    let {
        id
    } = req.params
    Contact.findById({
            _id: id
        })
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: 'Error Occurred'
            })
        })
}

exports.createContact = (req, res) => {
    let {
        name,
        phone,
        email
    } = req.body
    // here we need to catch our data from body & put it on the data model & then we need to use save fn on this model like under & its return a promise..
    let contact = new Contact({
        name,
        phone,
        email
    })
    contact.save()
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: 'Error Occurred'
            })
        })

}

exports.updateContactById = (req, res) => {
    let {name,phone,email} = req.body
    let 
        {id}
     = req.params
    //here in this query we need to pass first arg is condition, then we need to pass our update data , for pass update data there have many system but here i use single "set" operator system like under...
    //here third arg is for return update data . Otherwise this query method update data but by promise its return the previous data...
    Contact.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                name,
                phone,
                email
            }
        }, {
            new: true
        })
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: 'Error Occurred'
            })
        })
}

exports.deleteContactById = (req, res) => {
    let {
        id
    } = req.params
    // for deleting query system we need to pass just our condition as a obj & its also return a promise
    Contact.findOneAndDelete({
            _id: id
        })
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: 'Error Occurred'
            })
        })
}