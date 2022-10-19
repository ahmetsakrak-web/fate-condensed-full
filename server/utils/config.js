require("dotenv").config();
const PORT = process.env.PORT;
let URI = process.env.URI;

if (process.env.NODE_ENV === "test") {
  URI = process.env.URI_TEST;
}

module.exports = {
  PORT,
  URI,
};
