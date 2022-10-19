const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const userScema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [5, "Grup adı uzunluğu 5'den küçük olamaz"],
    unique: true,
  },
  passwordHash: {
    type: String,
    minlength: 7,
  },
  sheets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sheet",
    },
  ],
});

userScema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.passwordHash;
  },
});

userScema.plugin(uniqueValidator, {
  message: "Grup adi sizden önce alınmış. Farklı bir grup adı deneyin.",
});

const User = mongoose.model("User", userScema);

module.exports = User;
