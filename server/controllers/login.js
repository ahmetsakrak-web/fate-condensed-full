const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const loginRouter = require("express").Router();

loginRouter.post("/", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  const passwordDogrula =
    user === null
      ? false
      : await bcrypt.compare(req.body.password, user.passwordHash);

  if (!(user && passwordDogrula)) {
    return res.status(401).json({ error: "Kullanıcı Adı ya da Şifre Hatalı" });
  }

  const girisbilgileri = {
    username: user.username,
    id: user._id,
  };
  const token = jwt.sign(girisbilgileri, process.env.SECRET);

  res.status(200).json({ token, user: user.username });
});

module.exports = loginRouter;
