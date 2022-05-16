import CarForm from "../../components/CarForm";
import { ICar } from "../api/cars/interface/ICar";
import { getCarsById } from "../api/cars/getCarsById";
import { updateCar } from "../api/cars/updateCar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { showToastSuccess } from "./novo";

const EditCars = () => {
  const router = useRouter();
  const { editar: id } = router.query;
  const [car, setCar] = useState<ICar>();

  async function getCar() {
    await getCarsById(id as string).then((response) => setCar(response));
  }

  function updateList({ plate, brand, color }: ICar) {
    const idCar = id as string;
    const dataCar = { plate, brand, color };
    carMutation.mutate({ id: idCar, dataCar });
  }

  const queryClient = useQueryClient();

  const carMutation = useMutation(updateCar, {
    onSuccess: () => {
      showToastSuccess({ message: "Carro atualizado com sucesso!" });
      queryClient.invalidateQueries("cars");
    },
  });

  useEffect(() => {
    getCar();
  }, []);

  return (
    <CarForm
      pageTitle="Editar"
      dataCar={car}
      submit={(value) => updateList(value as ICar)}
    />
  );
};

export default EditCars;
