import type { NextPage } from "next";
import { saveBrand } from "../api/brands/saveBrand";
import BrandForm from "../../components/BrandForm";
import { IBrand } from "../api/brands/interface/IBrand";

const NewBrand: NextPage = () => {
  async function insertBrand({ name }: IBrand) {
    await saveBrand({ name }).then(() => console.log("Marca criada"));
  }

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
