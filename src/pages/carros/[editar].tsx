import CarForm from "../../components/CarForm";
import { ICar } from "../api/cars/interface/ICar";
import { getCarsById } from "../api/cars/getCarsById";
import { updateCar } from "../api/cars/updateCar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const EditCars = () => {
  const router = useRouter();
  const { editar: id } = router.query;

  const [car, setCar] = useState<ICar>();

  async function getCar() {
    await getCarsById(Number(id)).then((response) => setCar(response));
  }

  async function updateList({ plate, brand, color }: ICar) {
    await updateCar(Number(id), { plate, brand, color }).then(() =>
      console.log("Carro editado")
    );
  }

  useEffect(() => {
    getCar();
  }, []);

  return (
    <CarForm pageTitle="Editar" dataCar={car} submit={(value) => updateList(value as ICar)} />
  );
};

export default EditCars;
