import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/pages/Home.module.css";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { getBrand } from "../api/brands/getBrand";
import { GrAdd } from "react-icons/gr";
import { useQuery } from "react-query";
import { ReactNotifications } from "react-notifications-component";

const Brands: NextPage = () => {
  const query = useQuery("brands", getBrand);

  return (
    <div>
      <Head>
        <title>Gerenciamento | Marcas</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <ReactNotifications />

      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Marcas</h1>
          <Link href="/marcas/nova">
            <Button
              text="Nova Marca"
              icon={<GrAdd className={styles.buttonIcon} />}
              padding="0.5rem 2rem"
              radius="0.25rem"
              color="#fff"
              margin="0"
              onClick={() => console.log("Clicou em Nova Marca")}
            />
          </Link>
        </div>
        <Table
          path="marcas"
          data={query.data || []}
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
