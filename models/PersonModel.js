const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/personsDB', { useNewUrlParser: true })
const Schema = mongoose.Schema

const personSchema = new Schema({
    hair: { type: String, required: true },
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: []

})

const Person = mongoose.model("Person", personSchema)
module.exports = Person

