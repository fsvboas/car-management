import { carPaths, createConnection } from "../createConnection";
import { baseUrl } from "../createConnection";

export async function getCars() {
  try {
    const { data } = await createConnection.get(carPaths.getCar());
    return data;
  } catch (error) {
    throw error;
  }
}
