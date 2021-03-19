import api from "./api-config";

export const getAmountOfVitaPerServing = async () => {
  const resp = await api.get("/vitamin_amount_per_supplement");
  return resp.data;
}

export const addVitaminToSupplement = async (amountData) => {
  const resp = await api.post(`/vitamin_amount_per_supplement`, amountData);
  return resp.data;
};
