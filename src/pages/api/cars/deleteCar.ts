import { createConnection, carPaths } from "../createConnection";

export async function deleteCar(id: number) {
  try {
    await createConnection.delete(carPaths.deleteCar(id) /*, {params: {}} CREATE AND UPDATE */ );
  } catch (error) {
    throw error;
  }
}
