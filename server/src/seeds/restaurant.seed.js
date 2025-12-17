import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "../models/Restaurant.js";

dotenv.config();

const restaurants = [
  {
    name: "Spice Hub",
    cuisineType: "Indian",
    image: "https://source.unsplash.com/600x400/?indian,restaurant",
    rating: 4.4,
    deliveryTime: "30-40 mins",
    priceRange: "₹200–₹400",
    isOpen: true
  },
  {
    name: "Dragon Bowl",
    cuisineType: "Chinese",
    image: "https://source.unsplash.com/600x400/?chinese,food",
    rating: 4.3,
    deliveryTime: "25-35 mins",
    priceRange: "₹250–₹500",
    isOpen: true
  },
  {
    name: "Urban Bites",
    cuisineType: "Continental",
    image: "https://source.unsplash.com/600x400/?continental,restaurant",
    rating: 4.2,
    deliveryTime: "30-45 mins",
    priceRange: "₹300–₹600",
    isOpen: true
  },
  {
    name: "Green Leaf",
    cuisineType: "Vegetarian",
    image: "https://source.unsplash.com/600x400/?vegetarian,food",
    rating: 4.5,
    deliveryTime: "20-30 mins",
    priceRange: "₹180–₹350",
    isOpen: true
  },
  {
    name: "Sea Breeze",
    cuisineType: "Seafood",
    image: "https://source.unsplash.com/600x400/?seafood,restaurant",
    rating: 4.6,
    deliveryTime: "35-50 mins",
    priceRange: "₹400–₹800",
    isOpen: true
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");

    await Restaurant.deleteMany();
    console.log("Old restaurants removed");

    await Restaurant.insertMany(restaurants);
    console.log("✅ Restaurants seeded:", restaurants.length);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
