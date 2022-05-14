import type { NextPage } from "next";
import { saveCar } from "../api/cars/saveCar";
import CarForm from "../../components/CarForm";
import { ICar } from "../api/cars/interface/ICar";

const NewCar: NextPage = () => {
  async function insertCar({ plate, brand, color }: ICar) {
    await saveCar({ plate, brand, color }).then(() => console.log("ok"));
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
