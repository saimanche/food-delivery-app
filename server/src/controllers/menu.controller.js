import MenuItem from "../models/MenuItem.js";
import { fetchMealsByCategory } from "../services/mealdb.service.js";

export const getMenuByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    let menu = await MenuItem.find({ restaurantId });

    if (menu.length === 0) {
      // Find restaurant category
      const restaurant = await Restaurant.findById(restaurantId);
      const meals = await fetchMealsByCategory(restaurant.category);

      menu = await MenuItem.insertMany(
        meals.slice(0, 6).map((meal) => ({
          restaurantId,
          name: meal.strMeal,
          image: meal.strMealThumb,
          price: Math.floor(Math.random() * 200) + 100
        }))
      );
    }

    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: "Failed to load menu" });
  }
};
