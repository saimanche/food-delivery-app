import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Restaurants near you
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((r) => (
            <Link
              key={r._id}
              to={`/restaurant/${r._id}`}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={
                  r.image ||
                  "https://source.unsplash.com/600x400/?restaurant,food"
                }
                alt={r.name}
                className="h-44 w-full object-cover"
              />

              {/* Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {r.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {r.cuisineType}
                </p>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                    ★ {r.rating}
                  </span>

                  <span className="text-gray-500">
                    {r.deliveryTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
