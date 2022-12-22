const errorHandler = (err, req, res, next) => {
  let code = 500
  let message = 'Internal server error'

  const badReq = [
    "Email is required",
    "Password is required",
    "Description is required",
    "Price is required",
    "Main image URL is required",
    "Name is required",
    "Category is required"
  ]

  const notAuth = ["Invalid token", "Invalid email/password"]
  if(badReq.includes(err.message)) {
    code = 400
    message = err.message
  } else if( notAuth.includes(err.message) ) {
    code = 401
    message = err.message
  } else if(['SequelizeValidationError', "SequelizeUniqueConstraintError"].includes(err.name)) {
    code = 400
    message = err.errors[0].message
  } else if (err.name == "JsonWebTokenError") {
    code = 401
    message = "Invalid token"
  } else if (err.message == 'Data is not found') {
    code = 404
    message = err.message
  }

  res.status(code).json({ message })
}

module.exports = errorHandler