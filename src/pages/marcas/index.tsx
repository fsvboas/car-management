import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import styles from "../../styles/pages/marcas/Brands.module.css";
import { Table } from "../../components/Table";
import { getBrands } from "../api/brands/getBrand";

const Brands: NextPage = () => {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    getBrands().then((Response) => {
      setBrands(Response);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Gerenciamento | Marcas</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Marcas</h1>
          <Link href="/marcas/novo">
            <Button
              text="Novo carro"
              padding="0.5rem 2rem"
              radius="0.25rem"
              color="#fff"
              margin="0"
              onClick={() => console.log("Clicou novo carro pela aba marcas")}
            />
          </Link>
        </div>
        <Table
          path="marcas"
          data={brands || []}
          isObjectCar={true}
          header={[
            { id: "name", label: "Marca" },
            { id: "actions", label: "Ações", renderRow: true },
          ]}
        />
      </div>
    </div>
  );
};

export default Brands;
