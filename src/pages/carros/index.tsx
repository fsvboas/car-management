import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../../styles/pages/Home.module.css";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import { ICar } from "../api/cars/interface/ICar";
import { getCar } from "../api/cars/getCar";
import { IBrand } from "../api/brands/interface/IBrand";
import { getBrand } from "../api/brands/getBrand";
import { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { ReactNotifications } from "react-notifications-component";

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

      <ReactNotifications />

      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Carros</h1>
          <Link href="/carros/novo">
            <Button
              text="Novo carro"
              icon={<GrAdd className={styles.buttonIcon} />}
              padding="0.5rem 2rem"
              radius="0.25rem"
              color="#fff"
              margin="0"
              onClick={() => console.log("Clicou novo carro")}
            />
          </Link>
        </div>
        <div className={styles.filters}>
          <div>
            <label htmlFor="plate-filter">Filtrar por placa</label>
            <input
              className={styles.plateInput}
              type="text"
              name="plate-filter"
            />
          </div>
          <div>
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
          message="Carro excluído com sucesso!"
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
