import api from "./axios";

export const createOrder = async (orderData) => {
  const res = await api.post("/orders", orderData);
  return res.data;
};

export const fetchOrders = async () => {
  const res = await api.get("/orders");
  return res.data;
};
