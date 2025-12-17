import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const count = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          FoodDelivery
        </Link>

        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/orders" className="hover:text-green-600">Orders</Link>
          <Link to="/cart" className="hover:text-green-600">
            Cart ({count})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
