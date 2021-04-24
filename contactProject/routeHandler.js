const contact = require('./contact');

exports.getAllContact = (req, res)=> {
    res.json(contact.getAllContacts())
}

exports.getSingleContact = (req,res)=> {
    let id = req.params.Id
    // console.log(id)
    id = parseInt(id)
    // console.log(id)
    let contacts = contact.getContactById(id)
    res.json(contacts)
}

exports.createNewContact = (req,res)=> {
    let {name,phone,email} = req.body
    let contacts = contact.createContact({name,phone,email})
    res.json(contacts)
    // res.json(contact.createContact({name,phone,email}))
}

exports.updateContact = (req,res)=>{
    let id = req.params.Id
    id = parseInt(id)
    let {name,phone,email} = req.body
    let contacts = contact.updateContactById(id,{name ,phone,email})
    res.json(contacts)

}

exports.deleteContact = (req,res)=> {
    let id  = req.params.Id
    id = parseInt(id)

    let contacts = contact.deleteContactById(id)
    res.json(contacts)
}