import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/pages/carros/novo/NewCar.module.css";
import { Header } from "../../components/Header";
import Link from "next/link";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { getBrand } from "../api/brands/getBrand";
import { IBrand } from "../api/brands/interface/IBrand";
import { saveCar } from "../api/cars/saveCar";

const NewCar: NextPage = () => {
  const [plate, setPlate] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [brandList, setBrandList] = useState<IBrand[]>([]);

  async function fetchBrands() {
    await getBrand().then((response) => setBrandList(response));
  }

  async function insertCars() {
    await saveCar({ plate, brand, color }).then(() => console.log("ok"));
  }

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div>
      <Head>
        <title>Gerenciamento | Novo</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Novo Carro</h1>
        </div>
        <div className={styles.importNewCars}>
          <div className={styles.inputField}>
            <label htmlFor="new-plate">Placa</label>
            <input
              onChange={(event) => setPlate(event.currentTarget.value)}
              type="text"
              name="new-plate"
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-brand">Marca</label>
            <select
              onChange={(event) => setBrand(event.currentTarget.value)}
              name="new-brand"
              id="new-brand"
            >
              <option value=""></option>;
              {brandList.map((brand) => {
                return <option value={brand.name}>{brand.name}</option>;
              })}
            </select>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-color">Cor</label>
            <input
              onChange={(event) => setColor(event.currentTarget.value)}
              type="text"
              name="new-color"
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
              onClick={() => insertCars()}
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

export default NewCar;
