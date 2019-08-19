// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')


// const saltRounds = 10
// const userSchema = new mongoose.Schema({
//     nome: {
//         type: String,
//         require: true
//     },
//     apelido: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true,

//         unique: true
//     },
//     senha: {
//         type: String,
//         require: true,
//         minLenght: 6,
//         maxlength: 8
//     },
// })
// userSchema.pre('save', async function(next) {
//     const hash = await bcrypt.hash(this.password, saltRounds)
//     this.password = hash
//     next()

// })
// const User = mongoose.model('User', userSchema)

// module.exports = User