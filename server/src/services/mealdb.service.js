import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories.php`);
  return res.data.categories;
};

export const fetchMealsByCategory = async (category) => {
  const res = await axios.get(
    `${BASE_URL}/filter.php?c=${category}`
  );
  return res.data.meals;
};
