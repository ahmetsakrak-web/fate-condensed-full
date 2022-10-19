const bcrypt = require("bcryptjs");
const userRoute = require("express").Router();
const User = require("../models/user");
const Sheet = require("../models/sheet");
const {getTokenFrom} = require('../utils/middleware');
const jwt = require('jsonwebtoken');

userRoute.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    const formatedUser = user.map((e) => e.toJSON());
    return res.status(200).json(formatedUser);
  } catch (err) {
    return res.status(500).json();
  }
});

userRoute.post("/", async (req, res, next) => {
  const hashRounds = 10;
  if (req.body.username === "" || req.body.password === "") {
    res.status(400).json({ error: ["Grup adı ya da şifre Boş girildi","Şifre yedi haneden küçük olamaz"] });
  } else if (req.body.password.length < 7) {
    res.status(400).json({ error: ["Şifre yedi haneden küçük olamaz"] });
  } else {
    try {
      const passwordHash = await bcrypt.hash(req.body.password, hashRounds);
      const user = new User({
        username: req.body.username,
        passwordHash,
      });

      const saveduser = await user.save();

      return res.status(201).json(saveduser);
    } catch (err) {
      next(err);
    }
  }
});

userRoute.delete("/", async (req, res, next) => {
  try {
    const token = getTokenFrom(req); //bearer kelimesini atıp tokeni alıyor
    const decodedToken = jwt.verify(token, process.env.SECRET); //tokeni çözüp loginde girdiğimiz id ve username'i alıyoruz
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }
    const myuser = await User.findById(decodedToken.id);
    console.log(myuser)
    for (let sheet of myuser.sheets) {
      await Sheet.findByIdAndRemove(sheet);
    }

    await User.findByIdAndRemove(myuser._id);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = userRoute;
