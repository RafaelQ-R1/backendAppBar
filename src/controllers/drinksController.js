const Drink = require('../models/Drink')

class Drinks {
    async CreateDrink(req, res) {
        try {
            const {
                nome,
                email,
                nomeDrink,
                ingredientes,
                modoPreparo,
                tempoEstimado,
                numeroDrinks
            } = req.body

            const drink = await Drink.create(req.body)
            return res.status(200).json(drink)


        } catch (err) {
            console.log(err)

            return res.status(400).json({ error: 'falha ao criar o drink' })
        }
    }


    async selectAll(req, res) {

        try {
            const drinks = await Drink.find().sort({ createdAt: -1 })
            return res.status(200).send({
                drinks
            })

        } catch (err) {
            return res.status(400).send({

                error: "não foi possível encontrar receitas"
            })

        }

    }

}

module.exports = new Drinks