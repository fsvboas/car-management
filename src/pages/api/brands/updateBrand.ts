import { createConnection, brandPaths } from "../createConnection";
import { IBrand } from "./interface/IBrand";

export async function updateBrand({
  id,
  dataBrand,
}: {
  id: string;
  dataBrand: IBrand;
}) {
  try {
    const { data } = await createConnection.patch(
      brandPaths.updateBrand(id),
      dataBrand
    );
    return data;
  } catch (error) {
    throw error;
  }
}
