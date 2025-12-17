import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../api/order.api";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    try {
      await createOrder({
        restaurantId: cartItems[0].restaurantId,
        items: cartItems.map((item) => ({
          menuItemId: item._id,
          quantity: item.quantity
        })),
        totalAmount: total
      });

      clearCart();
      navigate("/success");
    } catch (error) {
      alert("Order failed. Try again.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>
      <h3>Total: ₹{total}</h3>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
