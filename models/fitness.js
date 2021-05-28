const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  type: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  duration: {
    type: Number,
    trime: true,
  },
  weight: {
    type: Number,
    trime: true,
  },
  reps: {
    type: Number,
    trime: true,
  },
  sets: {
    type: Number,
    trime: true,
  }
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;
