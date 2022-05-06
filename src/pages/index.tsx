import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Cars from "./carros";

const Home: NextPage = () => {
  return <Cars />;
};

export default Home;
