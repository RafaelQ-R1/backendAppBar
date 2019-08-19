const mongoose = require('mongoose')

const pensamentoSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true,
    },
    texto: {
        type: String,
        require: true,
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('pensamento', pensamentoSchema)