import { brandPaths } from "./../createConnection";
import { createConnection } from "../createConnection";
import { IBrand } from "./interface/IBrand";

export async function getBrand(): Promise<IBrand[]> {
  try {
    const { data } = await createConnection.get(brandPaths.getBrand());
    return data;
  } catch (error) {
    throw error;
  }
}
