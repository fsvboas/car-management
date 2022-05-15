import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IBrand } from "../api/brands/interface/IBrand";
import { updateBrand } from "../api/brands/updateBrand";
import { getBrandById } from "../api/brands/getBrandById";
import BrandForm from "../../components/BrandForm";

const EditBrands = () => {
  const router = useRouter();
  const { editar: id } = router.query;

  const [brand, setBrand] = useState<IBrand>();

  async function getBrand() {
    await getBrandById(Number(id)).then((response) => setBrand(response));
  }

  async function updateList({ name }: IBrand) {
    await updateBrand(Number(id), { name }).then(() =>
      console.log("Marca editada")
    );
  }

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
