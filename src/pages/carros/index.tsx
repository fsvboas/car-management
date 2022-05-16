import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../../styles/pages/Home.module.css";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import SelectBrand from "../../components/SelectBrand";
import { ICar } from "../api/cars/interface/ICar";
import { getCar } from "../api/cars/getCar";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import { useQuery } from "react-query";
import { ReactNotifications } from "react-notifications-component";

const Cars: NextPage = () => {
  const [searchPlate, setSearchPlate] = useState<string>("");
  const [searchBrand, setSearchBrand] = useState<string>("");

  const query = useQuery("cars", getCar);

  const carsFilter = query?.data
    ?.filter((car: ICar) =>
      car?.plate?.toLowerCase().includes(searchPlate.toLowerCase())
    )
    ?.filter((car: ICar) =>
      car?.brand?.toLowerCase().includes(searchBrand?.toLowerCase())
    );

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
              value={searchPlate}
              className={styles.plateInput}
              type="text"
              name="plate-filter"
              onChange={(event) => setSearchPlate(event.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="brand-filter">Filtrar por marca</label>
            <SelectBrand
              state={searchBrand}
              setState={(event) => setSearchBrand(event.currentTarget.value)}
            />
          </div>
        </div>
        <Table
          path="carros"
          data={carsFilter || []}
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
