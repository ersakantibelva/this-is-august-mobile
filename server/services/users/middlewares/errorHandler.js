const errorHandler = (err, req, res, next) => {
  let code = 500
  let message = 'Internal server error'

  if(err.message == 'Data is not found') {
    code = 404
    message = err.message
  } else if (err.name == 'BSONTypeError') {
    code = 404
    message = 'Data is not found'
  }

  console.log(err);

  res.status(code).json({ message })
}

module.exports = errorHandler