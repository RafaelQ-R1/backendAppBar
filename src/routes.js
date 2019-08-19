const express = require('express')
const router = express.Router()
    //const userController = require('./controllers/userController')
const pensamentoController = require('./controllers/pensamentoController')
const drinkController = require('./controllers/drinksController')

//rotas Pensamentos
router.post('/pensamento', pensamentoController.postar)
router.get('/pensamentoSorteado', pensamentoController.selecRandom)
router.get('/Pensamentos', pensamentoController.selectAll)


//rotas Users
//router.post('/registrar', userController.Registrar)
//router.post('/autenticar', userController.Autenticar)


//rotas Drinks
router.post('/enviarReceita', drinkController.CreateDrink)
router.get('/drinks', drinkController.selectAll)



module.exports = router