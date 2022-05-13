import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/pages/carros/Cars.module.css";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { Button } from "../../components/Button";
import { getCar } from "../api/cars/getCar";
import { getBrand } from "../api/brands/getBrand";
import { ICar } from "../api/cars/interface/ICar";
import { IBrand } from "../api/brands/interface/IBrand";

const Cars: NextPage = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  const [brandList, setBrandList] = useState<IBrand[]>([]);

  async function fetchBrands() {
    await getBrand().then((response) => setBrandList(response));
  }

  async function fetchCars() {
    await getCar().then((response) => {
      setCars(response);
    });
  }

  useEffect(() => {
    fetchBrands();
    fetchCars();
  }, []);

  return (
    <div>
      <Head>
        <title>Gerenciamento | Carros</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Carros</h1>
          <Link href="/carros/novo">
            <Button
              text="Novo carro"
              padding="0.5rem 2rem"
              radius="0.25rem"
              color="#fff"
              margin="0"
              onClick={() => console.log("Clicou novo carro")}
            />
          </Link>
        </div>
        <div className={styles.filters}>
          <div className={styles.plateInput}>
            <label htmlFor="plate-filter">Filtrar por placa</label>
            <input type="text" name="plate-filter" />
          </div>
          <div className={styles.brandInput}>
            <label htmlFor="brand-filter">Filtrar por marca</label>
            <select name="brand-filter" id="brand-filter">
              <option></option>;
              {brandList.map((brand) => {
                return <option>{brand.name}</option>;
              })}
            </select>
          </div>
        </div>

        <Table
          path="carros"
          data={cars || []}
          isObjectCar={true}
          header={[
            { id: "plate", label: "Placa" },
            { id: "color", label: "Cor" },
            { id: "brand", label: "Marca" },
            { id: "actions", label: "Ações", renderRow: true },
          ]}
        />
      </div>
    </div>
  );
};

export default Cars;
