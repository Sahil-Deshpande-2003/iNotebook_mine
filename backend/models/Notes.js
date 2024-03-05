const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({

  user:{
    // dusre object ki object id -> ye nahi samjha hai!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    type:mongoose.Schema.Types.ObjectId,
    ref:'user' 

},

  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", notesSchema);
