import type { NextPage } from "next";
import CarForm from "../../components/CarForm";
import { ICar } from "../api/cars/interface/ICar";
import { saveCar } from "../api/cars/saveCar";

const NewCar: NextPage = () => {
  async function insertCar({ plate, brand, color }: ICar) {
    await saveCar({ plate, brand, color }).then(() => console.log("Carro criado"));
  }

  return (
    <CarForm
      pageTitle="Novo"
      submit={(value) => {
        insertCar(value);
      }}
    />
  );
};

export default NewCar;
