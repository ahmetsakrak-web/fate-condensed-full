const logger = require("./logger");

const requestLog = (req, res, next) => {
  logger.info("Method: ", req.method);
  logger.info("Path: ", req.path);
  logger.info("Body: ", req.body);
  logger.info("-----------");

  next();
};

const BilinmeyenYol = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).send({ error: "malformaetted id" });
  } else if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);

    return res.status(400).json({
      error: messages,
    });
  } else if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      error: "Geçersiz Token",
    });
  }
  next(err);
};


const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
   
    return authorization.substring(7); // bearer kelimesini almamak için 7 harf sonrasını alıyor
  }
  return null;
};

module.exports = {
  requestLog,
  errorHandler,
  BilinmeyenYol,
  getTokenFrom
};
