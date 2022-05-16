import { useRouter } from "next/router";
import BrandForm from "../../components/BrandForm";
import { IBrand } from "../api/brands/interface/IBrand";
import { updateBrand } from "../api/brands/updateBrand";
import { getBrandById } from "../api/brands/getBrandById";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { showToastSuccess } from "../carros/novo";

const EditBrands = () => {
  const router = useRouter();
  const { editar: id } = router.query;
  const [brand, setBrand] = useState<IBrand>();

  async function getBrand() {
    await getBrandById(id as string).then((response) => setBrand(response));
  }

  function updateList({ name }: IBrand) {
    const idBrand = id as string;
    const dataBrand = { name };
    carMutation.mutate({ id: idBrand, dataBrand });
  }

  const queryClient = useQueryClient();

  const carMutation = useMutation(updateBrand, {
    onSuccess: () => {
      showToastSuccess({ message: "Marca atualizada com sucesso!" });
      queryClient.invalidateQueries("brands");
    },
  });

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <BrandForm
      pageTitle="Editar"
      dataBrand={brand}
      submit={(value) => updateList(value as IBrand)}
    />
  );
};

export default EditBrands;
