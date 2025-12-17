import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Restaurant = () => {
  const { category } = useParams();   // 👈 category, not id
  const { addToCart } = useCart();

  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        // add price & id locally
        const enriched = (data.meals || []).map((meal) => ({
          _id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          price: Math.floor(Math.random() * 200) + 150
        }));
        setMenu(enriched);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading menu...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {category} Menu
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-600 font-bold">
                    ₹{item.price}
                  </span>

                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    onClick={() => addToCart(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
