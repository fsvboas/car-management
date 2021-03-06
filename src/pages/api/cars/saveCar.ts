import { createConnection, carPaths } from "../createConnection";
import { ICar } from "./interface/ICar";

export async function saveCar(dataCar: ICar) {
  try {
    const { data } = await createConnection.post(carPaths.saveCar(), dataCar);
    return data;
  } catch (error) {
    throw error;
  }
}
