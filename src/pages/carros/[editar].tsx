import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/pages/carros/1/EditCar.module.css";
import { Header } from "../../components/Header";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IBrand } from "../api/brands/interface/IBrand";
import { ICar } from "../api/cars/interface/ICar";
import { getBrand } from "../api/brands/getBrand";
import { updateCar } from "../api/cars/updateCar";
import { getCarsById } from "../api/cars/getCarsById";

const EditCars: NextPage = () => {
  const router = useRouter();
  const { editar: id } = router.query;

  const [car, setCar] = useState<ICar>();

  const [plate, setPlate] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [brandList, setBrandList] = useState<IBrand[]>([]);

  async function fetchBrands() {
    await getBrand().then((response) => setBrandList(response));
  }

  async function getCar() {
    await getCarsById(Number(id)).then((response) => setCar(response));
  }

  async function updateList() {
    await updateCar(Number(id), { plate, brand, color }).then(() =>
      console.log("ok")
    );
  }

  useEffect(() => {
    getCar();
    fetchBrands();
  }, []);

  return (
    <div>
      <Head>
        <title>Gerenciamento | Editar</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Editar Carro</h1>
        </div>
        <div className={styles.importNewCars}>
          <div className={styles.inputField}>
            <label htmlFor="new-plate">Placa</label>
            <input
              value={car?.plate}
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
              <option value={car?.brand}>{car?.brand}</option>;
              {brandList.map((brand) => {
                return <option value={brand.name}>{brand.name}</option>;
              })}
            </select>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-color">Cor</label>
            <input
              value={car?.color}
              type="text"
              name="new-color"
              onChange={(event) => setColor(event.currentTarget.value)}
            />
          </div>
        </div>
        <div className={styles.buttonField}>
          <Link href="/">
            <Button
              text="Salvar"
              padding="0.5rem 1.3rem"
              radius="0.25rem"
              color="#fff"
              margin="0 1rem 0 0"
              onClick={() => updateList()}
            />
          </Link>
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
      </div>
    </div>
  );
};

export default EditCars;
