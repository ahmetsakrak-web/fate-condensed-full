const URI = require("./utils/config").URI;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const sheetsRoute = require("./controllers/sheets");
const userRoute = require("./controllers/users");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((err) => {
    logger.error("error connecting to MongoDB", err.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(middleware.requestLog);
}
app.use("/api/sheets", sheetsRoute);
app.use("/api/users", userRoute);
app.use("/api/login", loginRouter);
app.use(middleware.BilinmeyenYol);
app.use(middleware.errorHandler);

module.exports = app;
