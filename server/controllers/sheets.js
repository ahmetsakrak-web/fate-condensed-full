const Sheet = require("../models/sheet");
const User = require("../models/user");
const sheetsRoute = require("express").Router();
const jwt = require("jsonwebtoken");
const {getTokenFrom} = require('../utils/middleware');

sheetsRoute.get("/", async (req, res) => {
  try {
    const sheet = await Sheet.find({}).populate("user");
    return res.status(200).json(sheet);
  } catch (err) {
    return res.status(500).json();
  }
});


sheetsRoute.post("/", async (req, res, next) => {
  //bu gelen userId databaseden değil req ile göndereceğimiz userId parametresinden geliyor.
  try {
    const token = getTokenFrom(req); //bearer kelimesini atıp tokeni alıyor
    const decodedToken = jwt.verify(token, process.env.SECRET); //tokeni çözüp loginde girdiğimiz id ve username'i alıyoruz
    
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }
    const user = await User.findById(decodedToken.id);

    const sheet = new Sheet({
      karakterAdi: req.body.karakterAdi,
      highConsept: req.body.highConsept,
      trouble: req.body.trouble,
      aspect1: req.body.aspect1,
      aspect2: req.body.aspect2,
      aspect3: req.body.aspect3,
      stunts: req.body.stunts,
      super: req.body.super,
      harika: req.body.harika,
      iyi: req.body.iyi,
      eh: req.body.eh,
      duz: req.body.duz,
      can: req.body.can,
      mental: req.body.mental,
      sonuclar: req.body.sonuclar,
      user: user._id, //yukarıda bağladığımız user'in idsini buraya ekleriz
    });

    const savedSheet = await sheet.save();
    user.sheets = user.sheets.concat(savedSheet._id); //oyuncuya eklediğimiz user._id yanı sıra usera da bir üst satırda oluşan savedOyuncunun _id sini ekleriz.
    await user.save();
    return res.status(201).json(savedSheet);
  } catch (err) {
    next(err);
  }
});

sheetsRoute.delete("/:id", async (req, res, next) => {
  try {
    const token = getTokenFrom(req); //bearer kelimesini atıp tokeni alıyor
    
    const decodedToken = jwt.verify(token, process.env.SECRET); //tokeni çözüp loginde girdiğimiz id ve username'i alıyoruz
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }
    const myuser = await User.findById(decodedToken.id);
    const eslesenVeri = myuser.sheets.includes(req.params.id);
   
    if (eslesenVeri) {
      await Sheet.findByIdAndRemove(req.params.id);
      return res.status(204).end();
    }
  } catch (err) {
    next(err);
  }
});

sheetsRoute.put("/:id", async (req, res, next) => {
  try {
    const token = getTokenFrom(req); //bearer kelimesini atıp tokeni alıyor
    const decodedToken = jwt.verify(token, process.env.SECRET); //tokeni çözüp loginde girdiğimiz id ve username'i alıyoruz
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }
    const myuser = await User.findById(decodedToken.id);
    const eslesenVeri = myuser.sheets.includes(req.params.id);
    if (eslesenVeri) {
      const updated = await Sheet.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).json(updated);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = sheetsRoute;
