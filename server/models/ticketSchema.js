const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    issue: {
      type: String,
      required: true,
    },
    branchId: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "in-progress", "closed"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
