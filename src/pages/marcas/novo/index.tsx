import type { NextPage } from "next";
import Head from "next/head";

import styles from "../../../styles/pages/carros/novo/NewCar.module.css";

import { Header } from "../../../components/Header";
import Link from "next/link";
import Button from "../../../components/Button";

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
            <input type="text" name="new-brand" />
          </div>
        </div>
        <div className={styles.buttonField}>
          <Link href="">
            <Button
              text="Salvar"
              padding="0.5rem 1.3rem"
              radius="0.25rem"
              color="#fff"
              margin="0 1rem 0 0"
              onClick={() => console.log("Clicou novo carro")}
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
      </div>
    </div>
  );
};

export default Cars;
