import { createConnection, brandPaths } from "../createConnection";
import { IBrand } from "./interface/IBrand";

export async function saveBrand(dataBrand: IBrand) {
  try {
    const { data } = await createConnection.post(
      brandPaths.saveBrand(),
      dataBrand
    );
    return data;
  } catch (error) {
    throw error;
  }
}
