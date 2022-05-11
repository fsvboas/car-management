import { createConnection } from "../createConnection";
import { baseUrl } from "../createConnection";

export async function getBrands() {
  try {
    const { data } = await createConnection.get(baseUrl);
    return data;
  } catch (error) {
    throw error;
  }
}
