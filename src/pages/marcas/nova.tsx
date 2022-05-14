import type { NextPage } from "next";
import { saveBrand } from "../api/brands/saveBrand";
import BrandForm from "../../components/BrandForm";
import { IBrand } from "../api/brands/interface/IBrand";

const NewBrand: NextPage = () => {
  async function insertBrand({ name }: IBrand) {
    await saveBrand({ name }).then(() => console.log("ok"));
  }

  return (
    <BrandForm
      submit={(value) => {
        insertBrand(value);
      }}
    />
  );
};

export default NewBrand;
