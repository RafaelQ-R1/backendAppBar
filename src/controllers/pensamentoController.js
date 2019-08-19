const pensamento = require('../models/pemsamento')

class enviarPensamento {

    async postar(req, res) {

        const { name, texto, email } = req.body
        if (!name || !texto || !email)
            return res.status(400).send({ error: 'há dados em branco' })

        const pensamentoCriado = await pensamento.create(req.body)

        await pensamentoCriado.save()

        return res.json(pensamentoCriado)
    }


    async selecRandom(req, res) {

        pensamento.count().exec(function(err, count) {
            var randomPensamento = Math.floor(Math.random() * count)

            pensamento.findOne().skip(randomPensamento).exec(

                function(err, result) {
                    return res.json(result)
                }
            )
        })
    }

    async selectAll(req, res) {

        try {
            const Pensamento = await pensamento.find().sort({ createdAt: -1 })
            return res.status(200).send({
                Pensamento
            })

        } catch (err) {
            return res.status(400).send({

                error: "não foi possível encontrar pensamentos"
            })

        }

    }

}
module.exports = new enviarPensamento()