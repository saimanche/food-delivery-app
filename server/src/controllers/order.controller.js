import Order from "../models/Order.js";

/* CREATE ORDER */
export const createOrder = async (req, res) => {
  try {
    const { restaurantId, items, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const order = await Order.create({
      // userId will be added when auth UI is connected
      restaurantId,
      items,
      totalAmount,
      paymentStatus: "paid",
      orderStatus: "placed"
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Order creation failed" });
  }
};

/* GET ALL ORDERS (Order History) */
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("restaurantId", "name")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
