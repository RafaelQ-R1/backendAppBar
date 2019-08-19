// const User = require('../models/user')
// const bcrypt = require('bcrypt')

// class users {

//     async Registrar(req, res) {
//         const { nome, email, senha, apelido } = req.body
//         if (await (User.findOne({ email })))
//             return res.status(400).send({ error: 'usuário já existe' })

//         if (await (User.findOne({ apelido })))
//             return res.status(400).send({ error: 'já existe um usuário com esse apelido' })

//         const user = User.create(req.body)
//         res.status(200).send({ user })
//     }


//     async Autenticar(req, res) {
//         try {
//             const { email, senha } = req.body
//             const user = await User.findOne({
//                 email
//             }).select('+senha')

//             if (!user)
//                 return res.status(400).send({
//                     erro: 'Usuário não existe'
//                 })

//             if (!await bcrypt.compare(senha, user.senha))
//                 return res.status(400).send({
//                     error: 'password invalido'
//                 })

//             user.password = undefined

//             res.send({
//                 user
//             })

//         } catch (err) {
//             console.log(err)
//             return res.status(400).send({ error: 'Ocorreu um erro ao tentar logar' })
//         }

//     }


//     async Update(req, res) {
//         try {

//             const { nome, senha, email, apelido } = req.body

//             if (await (User.findOne({ apelido })))
//                 return res.status(400).send({ error: 'já existe um usuário com esse apelido' })

//             if (!user)
//                 return res.status(400).send({ error: 'usuario não encontrado' })

//             if (senha === user.password)
//                 return res.status(400).send({ error: 'você já está utilizando essa senha. Tente outra' })

//             if (nome === user.name)
//                 return res.status(400).send({ error: 'você já está utilizando essa nome. Tente outro' })



//             const user = User.findOneAndUpdate(email, password, name, {
//                 new: true
//             })

//             await user.save()

//         } catch (err) {
//             console.log(err)
//             return res.status(400).send({ error: 'erro' })
//         }
//     }

// }

// module.exports = new users