import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/pages/carros/Cars.module.css";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import Button from "../../components/Button";
import { getCars } from "../api/cars/getCar";

export interface ICar {
  id?: number;
  plate: string;
  color: string;
  brand: string;
  name: string;
}

const Cars: NextPage = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    getCars().then((Response) => {
      setCars(Response);
    });
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
              <option value="Volkswagen">Volkswagen</option>
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
