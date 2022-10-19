const mongoose = require("mongoose");

const sheetSchema = new mongoose.Schema({
  karakterAdi: String,
  highConsept: String,
  trouble: String,
  aspect1: String,
  aspect2: String,
  aspect3: String,
  stunts: String,
  super: { type: [String], maxlength: 11 },
  harika: { type: [String], maxlength: 11 },
  iyi: { type: [String], maxlength: 11 },
  eh: { type: [String], maxlength: 11 },
  duz: { type: [String], maxlength: 11 },
  can: [Boolean],
  mental: [Boolean],
  sonuclar: [{ no: Number, yazi: String }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//oyuncuSchema.set("toJson", {
//  transform: (document, returnedObject) => {
//   returnedObject.id = returnedObject._id.toString();
//   delete returnedObject._id;
//   delete returnedObject._v;
//  },
//});

module.exports = mongoose.model("Sheet", sheetSchema);
