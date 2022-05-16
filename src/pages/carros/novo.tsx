import type { NextPage } from "next";
import CarForm from "../../components/CarForm";
import { ICar } from "../api/cars/interface/ICar";
import { saveCar } from "../api/cars/saveCar";
import { useMutation, useQueryClient } from "react-query";
import { Store } from "react-notifications-component";

const NewCar: NextPage = () => {
  function insertCar({ plate, brand, color }: ICar) {
    carMutation.mutate({ plate, brand, color });
  }

  const queryClient = useQueryClient();

  const carMutation = useMutation(saveCar, {
    onSuccess: () => {
      showToastSuccess({ message: "Carro adicionado com sucesso!" });
      queryClient.invalidateQueries("cars");
    },
  });

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

export function showToastSuccess({ message }: { message: String }) {
  Store.addNotification({
    message: message,
    type: "success",
    container: "top-center",
    width: 300,
    dismiss: {
      duration: 2000,
    },
  });
}
