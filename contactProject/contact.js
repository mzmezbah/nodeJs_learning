
// let contact = []

// let contactData = localStorage.getItem(data)
// if(!contactData){
//     localStorage.setItem(data, JSON.stringify(contact))
// }

class Contacts{
    constructor(data){
        this.contacts = []
    //     this.data = data
    //     this.contacts = JSON.parse(localStorage.getItem(data))
    }

    getAllContacts(){
        return this.contacts
    }

    getContactById(id){
     return this.contacts.find(contact => contact.id == id)
    }

    createContact(contact){
        if (this.contacts.length == 0) {
            contact.id = this.contacts.length + 1
        } else {
            contact.id = this.contacts[this.contacts.length-1].id + 1
        }
        this.contacts.push(contact)
        return contact
    }
    updateContactById(id,updatedContact){
        let index = this.contacts.findIndex(contact => contact.id === id)

        this.contacts[index].name = updatedContact.name || this.contacts[index].name
        this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone
        this.contacts[index].email = updatedContact.email || this.contacts[index].email
        return this.contacts[index]

    }

    deleteContactById(id){
        let index = this.contacts.findIndex(contact => contact.id === id)
        let deletedObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact =>contact.id != id )
        return deletedObj

    }

}

module.exports = new Contacts;
