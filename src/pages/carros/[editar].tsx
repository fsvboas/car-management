import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/pages/carros/1/EditCar.module.css";

import { Header } from "../../components/Header";
import Button from "../../components/Button";
import { useRouter } from "next/router";

const Cars: NextPage = () => {
  const router = useRouter();
  const { editar } = router.query;
  console.log(editar);

  return (
    <div>
      <Head>
        <title>Gerenciamento | Editar</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <div className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Editar Carro</h1>
        </div>
        <div className={styles.importNewCars}>
          <div className={styles.inputField}>
            <label htmlFor="new-plate">Placa</label>
            <input type="text" name="new-plate" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-brand">Marca</label>
            <input type="search" name="new-brand" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="new-color">Cor</label>
            <input type="text" name="new-color" />
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
              onClick={() => console.log("Clicou Salvar")}
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

export default Cars;
