import { createConnection, carPaths } from "../createConnection";
import { ICar } from "./interface/ICar";

export async function updateCar({
  id,
  dataCar,
}: {
  id: string;
  dataCar: ICar;
}) {
  try {
    const { data } = await createConnection.patch(
      carPaths.updateCar(id),
      dataCar
    );
    return data;
  } catch (error) {
    throw error;
  }
}
