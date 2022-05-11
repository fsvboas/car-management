import { createConnection, carPaths } from "../createConnection";

export async function saveCar(id: number, plate: string, color: string) {
  try {
    const { data } = await createConnection.post(
      carPaths.saveCar(id, plate, color)
    );
    return data;
  } catch (error) {
    throw error;
  }
}
