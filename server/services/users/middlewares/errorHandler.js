const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "Internal server error";

  const badReqVal = [
    "Email is required",
    "Password is required",
    "Email must be unique",
    "Password must have minimum of 5 characters",
    "Invalid email format"
  ];

  console.log(err);

  if (err.message == "Data is not found") {
    code = 404;
    message = err.message;
  } else if (err.name == "BSONTypeError") {
    code = 404;
    message = "Data is not found";
  } else if (badReqVal.includes(err.message)) {
    console.log("masuk");
    code = 400;
    message = err.message;
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
