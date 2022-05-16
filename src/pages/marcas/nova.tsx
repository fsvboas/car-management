import type { NextPage } from "next";
import { saveBrand } from "../api/brands/saveBrand";
import BrandForm from "../../components/BrandForm";
import { IBrand } from "../api/brands/interface/IBrand";
import { useMutation, useQueryClient } from "react-query";
import { showToastSuccess } from "../carros/novo";

const NewBrand: NextPage = () => {
  async function insertBrand({ name }: IBrand) {
    await saveBrand({ name }).then(() => console.log("Marca criada"));
  }

  const queryClient = useQueryClient();

  const carMutation = useMutation(saveBrand, {
    onSuccess: () => {
      showToastSuccess({ message: "Marca adicionada com sucesso!" });
      queryClient.invalidateQueries("cars");
    },
  });

  return (
    <BrandForm
      pageTitle="Nova"
      submit={(value) => {
        insertBrand(value);
      }}
    />
  );
};

export default NewBrand;
