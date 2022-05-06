import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/pages/Home.module.css";

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

      <h1>PAGINA CARROS</h1>
    </div>
  );
};

export default Cars;
