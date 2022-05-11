import { createConnection, brandPaths } from "../createConnection";

export async function saveBrand(id: number, plate: string, color: string) {
  try {
    const { data } = await createConnection.post(
      brandPaths.saveBrand(id, plate, color)
    );
    return data;
  } catch (error) {
    throw error;
  }
}
