import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/carros/1/EditCar.module.css";
import { Header } from "../components/Header";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IBrand } from "../pages/api/brands/interface/IBrand";
import { ICar } from "../pages/api/cars/interface/ICar";
import { getBrand } from "../pages/api/brands/getBrand";

type CarFormProps = {
  submit?: (value: ICar) => void;
  dataCar?: ICar | undefined;
  pageTitle: string;
};

export default function CarForm({
  submit,
  dataCar = undefined,
  pageTitle,
}: CarFormProps) {
  const router = useRouter();

  const [plate, setPlate] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [brandList, setBrandList] = useState<IBrand[]>([]);

  async function fetchBrands() {
    await getBrand().then((response) => setBrandList(response));
  }

  const submitForms = (event: any) => {
    router.push("/");
    event.preventDefault();
    submit?.({ plate, brand, color } as ICar);
  };

  useEffect(() => {
    if (dataCar !== undefined) {
      setPlate(dataCar.plate);
      setBrand(dataCar.brand);
      setColor(dataCar.color);
    }
    fetchBrands();
  }, [dataCar]);

  return (
    <div>
      <Head>
        <title>Gerenciamento | Editar</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <form onSubmit={submitForms} className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>{pageTitle} Carro</h1>
        </div>
        <div className={styles.importNewCars}>
          <div className={styles.inputField}>
            <label htmlFor="new-plate">Placa</label>
            <input
              value={plate}
              type="text"
              name="new-plate"
              onChange={(event) => setPlate(event.currentTarget.value)}
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-brand">Marca</label>
            <select
              onChange={(event) => setBrand(event.currentTarget.value)}
              name="new-brand"
              id="new-brand"
            >
              <option value={brand}>{brand}</option>;
              {brandList.map((brand) => {
                return <option value={brand.name}>{brand.name}</option>;
              })}
            </select>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-color">Cor</label>
            <input
              value={color}
              type="text"
              name="new-color"
              onChange={(event) => setColor(event.currentTarget.value)}
            />
          </div>
        </div>
        <div className={styles.buttonField}>
          <Button
            text="Salvar"
            padding="0.5rem 1.3rem"
            radius="0.25rem"
            color="#fff"
            margin="0 1rem 0 0"
            type="submit"
          />
          <Link href="/">
            <Button
              text="Voltar"
              padding="0.5rem 1.3rem"
              radius="0.25rem"
              color="#fff"
              margin="0"
              onClick={() => console.log("Clicou Voltar")}
            />
          </Link>
        </div>
      </form>
    </div>
  );
}
