const errorHandler = (err, req, res, next) => {
  let code = err.response.status
  let message = err.response.data

  res.status(code).json(message)
}

module.exports = errorHandler