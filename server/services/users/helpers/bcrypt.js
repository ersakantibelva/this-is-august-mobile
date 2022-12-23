const bcrypt = require('bcryptjs')

const hashPass = (pass) => bcrypt.hashSync(pass, 8)

module.exports = { hashPass }