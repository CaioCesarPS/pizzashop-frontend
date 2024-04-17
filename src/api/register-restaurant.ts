import { api } from "@/lib/axios";

export interface RegisterRestaurat {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  email,
  restaurantName,
  managerName,
  phone,
}: RegisterRestaurat) {
  await api.post("/restaurants", { email, restaurantName, managerName, phone });
}
