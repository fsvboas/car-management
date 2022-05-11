import { createConnection, carPaths } from "../createConnection";

export async function getCarsById(id: number) {
  try {
    const { data } = await createConnection.get(carPaths.getCarById(id));
    return data;
  } catch (error) {
    throw error;
  }
}
