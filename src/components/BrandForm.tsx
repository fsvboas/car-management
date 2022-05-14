import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/carros/1/EditCar.module.css";
import { Header } from "../components/Header";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IBrand } from "../pages/api/brands/interface/IBrand";
import { getBrand } from "../pages/api/brands/getBrand";

type BrandFormProps = {
  submit?: (value: IBrand) => void;
  dataBrand?: IBrand | undefined;
};

export default function BrandForm({
  submit,
  dataBrand = undefined,
}: BrandFormProps) {
  const router = useRouter();

  const [brand, setBrand] = useState<string>("");
  const [brandList, setBrandList] = useState<IBrand[]>([]);

  async function fetchBrands() {
    await getBrand().then((response) => setBrandList(response));
  }

  const submitForms = (event: any) => {
    router.push("/marcas");
    event.preventDefault();
    //@ts-ignore
    submit?.({ name } as IBrand);
  };

  useEffect(() => {
    if (dataBrand !== undefined) {
      setBrand(dataBrand.name);
    }
    fetchBrands();
  }, [dataBrand]);

  console.log(dataBrand);

  return (
    <div>
      <Head>
        <title>Gerenciamento | Editar</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />

      <form onSubmit={submitForms} className={styles.pageContainer}>
        <div className={styles.title}>
          <h1>Editar Marca</h1>
        </div>
        <div className={styles.importNewBrand}>
          {/* <div className={styles.inputField}>
            <label htmlFor="new-color">ID</label>
            <input
              value={color}
              type="text"
              name="new-color"
              onChange={(event) => setColor(event.currentTarget.value)}
            />
          </div> */}
          <div className={styles.inputField}>
            <label htmlFor="new-brand">Marca</label>
            <input
              value={brand}
              type="text"
              name="new-color"
              onChange={(event) => setBrand(event.currentTarget.value)}
            />
          </div>
        </div>
        <div className={styles.buttonField}>
          <Button
            text="Salvar"
            padding="0.5rem 1.3rem"
            radius="0.25rem"
            color="#fff"
            margin="0 1rem 0 0"
            type="submit"
          />
          <Link href="/marcas">
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
      </form>
    </div>
  );
}
