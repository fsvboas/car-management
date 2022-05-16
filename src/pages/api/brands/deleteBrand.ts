import { createConnection, brandPaths } from "../createConnection";

export async function deleteBrand(id: string) {
  try {
    await createConnection.delete(brandPaths.deleteBrand(id));
  } catch (error) {
    throw error;
  }
}
