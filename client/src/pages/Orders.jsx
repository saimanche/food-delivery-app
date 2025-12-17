import { useEffect, useState } from "react";
import { fetchOrders } from "../api/order.api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order) => (
        <div
          key={order._id}
          style={{ marginBottom: 15, borderBottom: "1px solid #ccc" }}
        >
          <p>
            <strong>Restaurant:</strong>{" "}
            {order.restaurantId?.name}
          </p>
          <p>
            <strong>Total:</strong> ₹{order.totalAmount}
          </p>
          <p>
            <strong>Status:</strong> {order.orderStatus}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
