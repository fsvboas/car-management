import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/pages/carros/novo/NewCar.module.css";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { useState, useEffect } from "react";
import { IBrand } from "../../api/brands/interface/IBrand";
import { saveBrand } from "../../api/brands/saveBrand";
import { getBrand } from "../../api/brands/getBrand";

const newBrand: NextPage = () => {
  const [brand, setBrand] = useState<string>("");
  const [brandList, setBrandList] = useState<IBrand[]>([]);

  async function fetchBrands() {
    await getBrand().then((response) => setBrandList(response));
  }

  async function insertBrand() {
    await saveBrand({ name }).then(() => console.log("ok"));
  }

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div>
      <Head>
        <title>Gerenciamento de carros</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <form className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Nova Marca</h1>
        </div>
        <div className={styles.importNewCars}>
          <div className={styles.inputField}>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-brand">Marca</label>
            <input
              type="text"
              name="new-brand"
              onChange={(event) => setBrand(event.currentTarget.value)}
            />
          </div>
        </div>
        <div className={styles.buttonField}>
          <Link href="/marcas">
            <Button
              text="Salvar"
              padding="0.5rem 1.3rem"
              radius="0.25rem"
              color="#fff"
              margin="0 1rem 0 0"
              onClick={() => insertBrand()}
            />
          </Link>
          <Link href="/">
            <Button
              text="Voltar"
              padding="0.5rem 1.3rem"
              radius="0.25rem"
              color="#fff"
              margin="0"
              onClick={() => console.log("Clicou em voltar")}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default newBrand;
