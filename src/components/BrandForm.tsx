import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/Forms.module.css";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { IBrand } from "../pages/api/brands/interface/IBrand";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type BrandFormProps = {
  submit?: (value: IBrand) => void;
  dataBrand?: IBrand | undefined;
  pageTitle: string;
};

export default function BrandForm({
  submit,
  dataBrand = undefined,
  pageTitle,
}: BrandFormProps) {
  const router = useRouter();

  const [brand, setBrand] = useState<string>("");

  const submitForms = (event: any) => {
    router.push("/marcas");
    event.preventDefault();
    submit?.({ name: brand } as IBrand);
  };

  useEffect(() => {
    if (dataBrand !== undefined) {
      setBrand(dataBrand.name);
    }
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
          <h1>{pageTitle} Marca</h1>
        </div>
        <div className={styles.inputContainer}>
          {dataBrand?.id ? (
            <div className={styles.inputField}>
              <label htmlFor="new-color">ID</label>
              <input
                value={dataBrand?.id}
                type="text"
                name="new-color"
                disabled
              />
            </div>
          ) : null}
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
