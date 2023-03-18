const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
