import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Restaurant from "../models/Restaurant.js";
import MenuItem from "../models/MenuItem.js";
import { fetchMealsByCategory } from "../services/mealdb.service.js";

dotenv.config();

const seedMenu = async () => {
  try {
    await connectDB();

    await MenuItem.deleteMany();

    const restaurants = await Restaurant.find();
    if (restaurants.length === 0) {
      console.log("No restaurants found. Seed restaurants first.");
      process.exit();
    }

    const categoryMap = {
      Indian: "Chicken",
      Continental: "Beef",
      Chinese: "Seafood"
    };

    for (const restaurant of restaurants) {
      const category = categoryMap[restaurant.cuisineType];
      if (!category) continue;

      const meals = await fetchMealsByCategory(category);

      const menuItems = meals.slice(0, 5).map((meal) => ({
        restaurantId: restaurant._id,
        name: meal.name,
        image: meal.image,
        price: Math.floor(Math.random() * 200) + 150
      }));

      await MenuItem.insertMany(menuItems);
    }

    console.log("Menu items seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Menu seeding failed:", error.message);
    process.exit(1);
  }
};

seedMenu();
