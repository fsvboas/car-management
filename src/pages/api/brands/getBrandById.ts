import { createConnection, brandPaths } from "../createConnection";

export async function getBrandById(id: string) {
  try {
    const { data } = await createConnection.get(brandPaths.getBrandById(id));
    return data;
  } catch (error) {
    throw error;
  }
}
