const mongoose = require('mongoose')
const drinkSchema = new mongoose.Schema({

        nome: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,

        },
        nomeDrink: {
            type: String,
            require: true,
        },
        ingredientes: {
            type: String,
            require: true,
        },
        modoPreparo: {
            type: String,
            require: true,
        },
        tempoEstimado: {
            type: String,
            require: true,

        },
        numeroDrinks: {
            type: Number,
            require: true,

        }
    }, {
        timestamps: true
    }

)

module.exports = mongoose.model('drink', drinkSchema)