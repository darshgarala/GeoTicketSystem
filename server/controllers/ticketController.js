const Ticket = require("../models/ticketSchema");
const Branch = require("../models/branchSchema");

const createTicket = async (req, res) => {
  try {
    const { customerName, issue, branchId } = req.body;

    if (!customerName || !issue || !branchId) {
      return res.status(400).json({
        message: "Missing required fields: customerName, issue, branchId",
      });
    }

    const branchExists = await Branch.findById(branchId);
    if (!branchExists) {
      return res.status(404).json({ message: "Branch not found" });
    }

    const newTicket = new Ticket({
      customerName,
      issue,
      branchId,
    });

    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createTicket,
};
