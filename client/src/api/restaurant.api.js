import api from "./axios";

export const fetchRestaurants = async () => {
  const res = await api.get("/restaurants");
  return res.data;
};
