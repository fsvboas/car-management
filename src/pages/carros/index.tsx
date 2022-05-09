import { Component, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/pages/carros/Cars.module.css";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import Button from "../../components/Button";
import { userInfo } from "os";

export interface ICar {
  id?: number;
  plate: string;
  color: string;
  brand: string;
}

// interface IInitialState {
//   car: ICar;
//   list: ICar[];
// }

const baseUrl = "http://localhost:3333";
const createConection = axios.create({ baseURL: baseUrl });

// const initialState: IInitialState = {
//   car: { id: 0, plate: "", color: "", brand: "" },
//   list: [],
// };

// export default class index extends Component {
//   state = { ...initialState };

//   componentWillMount() {
//     axios(baseUrl).then((resp) => {
//       this.setState({ list: resp.data });
//     });
//   }

//   clear() {
//     this.setState({ car: initialState.car });
//   }

//   save() {
//     const car = this.state.car;
//     const method = car.id ? "put" : "post";
//     const url = car.id ? `${baseUrl}/${car.id}` : baseUrl;
//     axios[method](url, car).then((resp) => {
//       const list = this.getUpdatedList(resp.data);
//       this.setState({ car: initialState.car, list });
//     });
//   }

//   getUpdatedList(car: ICar, add = true) {
//     const list = this.state.list.filter((c) => c.id !== car.id);
//     if (add) list.unshift(car);
//     return list;
//   }

//   updateField(event: React.ChangeEvent<HTMLInputElement>) {
//     const car = { ...this.state.car };
//     car[event.currentTarget.plate as string] = event.target.value;
//     this.setState({ car });
//   }
// }

const Cars: NextPage = () => {
  // const [cars, setCars] = useState<ICar[]>([]);
  // useEffect(() => {
    // createConection.get("/cars").then(({ data }) => setCars(data));
  // }, []);

  const cars = [{
    plate: 'BLA1234',
    color: 'black',
    brand: 'FIAT'
  }]

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

        <Table data={cars}/>
      </div>
    </div>
  );
};

export default Cars;
