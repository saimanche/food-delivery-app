import api from "./axios";

export const fetchMenuByRestaurant = async (restaurantId) => {
  const res = await api.get(`/menu/${restaurantId}`);
  return res.data;
};
