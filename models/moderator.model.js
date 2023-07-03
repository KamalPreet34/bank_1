const mongoose = require("mongoose");
moderatorSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});
moderatorModel = mongoose.model("moderator", moderatorSchema);
module.exports = { moderatorModel };
