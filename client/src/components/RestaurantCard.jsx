import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-44 object-cover"
        />

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">
            {restaurant.name}
          </h3>

          <div className="flex items-center gap-3 text-sm mt-2">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md font-medium">
              ⭐ {restaurant.rating}
            </span>
            <span className="text-gray-500">
              {restaurant.time}
            </span>
          </div>

          <p className="text-gray-500 text-sm mt-1">
            {restaurant.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
