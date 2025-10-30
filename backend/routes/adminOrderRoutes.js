const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

//get /api/admin/orders
// get all orders
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
});

// put /api/admin/orders/:id
// to update order details like processing , out for delivery

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      order.isDelivered =
        req.body.status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(400).json({ message: "No order found!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
});

// delete /api/admin/orders/:id
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      await order.deleteOne();
      res.json({ message: "Order removed!" });
    } else {
      res.status(404).json({ message: "No order found!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
});

module.exports = router;
