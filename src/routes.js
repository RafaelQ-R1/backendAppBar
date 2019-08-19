const express = require('express')
const router = express.Router()

const pensamentoController = require('./controllers/pensamentoController')
const drinkController = require('./controllers/drinksController')

router.post('/pensamento', pensamentoController.postar)
router.get('/pensamentoSorteado', pensamentoController.selecRandom)
router.get('/Pensamentos', pensamentoController.selectAll)

router.post('/enviarReceita', drinkController.CreateDrink)
router.get('/drinks', drinkController.selectAll)


module.exports = router