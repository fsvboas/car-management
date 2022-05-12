import { carPaths, createConnection } from "../createConnection";

export async function getCar() {
  try {
    const { data } = await createConnection.get(carPaths.getCar());
    return data;
  } catch (error) {
    throw error;
  }
}
