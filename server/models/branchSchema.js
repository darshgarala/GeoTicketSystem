const mongoose = require("mongoose");
const { Schema } = mongoose;

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const branchSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: pointSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

branchSchema.index({ location: "2dsphere" });

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;
