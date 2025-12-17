import express from "express";
import { getMenuByRestaurant } from "../controllers/menu.controller.js";

const router = express.Router();

/* GET menu for a restaurant */
router.get("/:restaurantId", getMenuByRestaurant);

export default router;
