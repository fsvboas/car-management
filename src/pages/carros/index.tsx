import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../../styles/pages/Cars.module.css";

import { Header } from "../../components/Header";

// import styles from "../../styles/pages/Home.module.css";

const Cars: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gerenciamento de carros</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <div className={styles.pageContainer}>
        <div className={styles.top}>
          <h1>Carros</h1>
          <button>Novo Carro</button>
        </div>
        <div className={styles.filters}>
          <div className={styles.plateInput}>
            <label htmlFor="plate-filter">Filtrar por placa</label>
            <input type="text" name="plate-filter" />
          </div>
          <div className={styles.brandInput}>
            <label htmlFor="brand-filter">Filtrar por marca</label>
            <input type="" name="brand-filter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
