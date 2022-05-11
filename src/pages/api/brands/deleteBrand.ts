import { createConnection, brandPaths } from "../createConnection";

export async function deleteBrand(id: number) {
  try {
    await createConnection.delete(brandPaths.deleteBrand(id));
  } catch (error) {
    throw error;
  }
}
