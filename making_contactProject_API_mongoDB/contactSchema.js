const {
    Schema,
    model
} = require('mongoose')

let newSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 12

    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 9,
        maxlength: 14
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    }
})

let Contact = model('contact', newSchema)

module.exports = Contact