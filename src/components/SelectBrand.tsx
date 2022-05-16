import React from "react";
import { getBrand } from "../pages/api/brands/getBrand";
import { IBrand } from "../pages/api/brands/interface/IBrand";

type selectBrandProps = {
  state: string;
  setState: (value: any) => void;
};

const SelectBrand = ({ state, setState }: selectBrandProps) => {
  const [brandList, setBrandList] = React.useState<IBrand[]>([]);

  React.useEffect(() => {
    getBrand().then((response) => setBrandList(response));
  }, []);

  return (
    <select
      value={state}
      name="brand-filter"
      id="brand-filter"
      onChange={(value) => setState(value)}
    >
      <option></option>;
      {brandList.map((brand) => {
        return <option>{brand.name}</option>;
      })}
    </select>
  );
};

export default SelectBrand;
