import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <div
          key={item._id}
          style={{
            marginBottom: 12,
            display: "flex",
            alignItems: "center"
          }}
        >
          <span>
            {item.name} × {item.quantity} — ₹{item.price * item.quantity}
          </span>

          <button
            style={{ marginLeft: 12 }}
            onClick={() => removeFromCart(item._id)}
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>

          <button
            style={{ marginTop: 10 }}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
