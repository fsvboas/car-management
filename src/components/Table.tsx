import Link from "next/link";
import { ICar } from "../pages/carros";
import styles from "../styles/components/Table.module.css";
import Button from "./Button";
import { ReactNode, useEffect, useState } from "react";
import { mappedObjectDataKeyToPortuguese } from "../utils/mapObjectDataKeyToPortuguese";
import { createConnection } from "../pages/api/createConnection";
import { deleteCar } from "../pages/api/cars/deleteCar";
import { getCars } from "../pages/api/cars/getCar";
import { getBrands } from "../pages/api/brands/getBrand";
import { deleteBrand } from "../pages/api/brands/deleteBrand";

type headerProps = {
  id: string;
  label: string;
  renderRow?: boolean;
};
interface TableProps {
  data: ICar[] | { name: string }[];
  header: headerProps[];
  isObjectCar: boolean;
  path: string;
}

export function Table(props: TableProps) {
  const [data, setData] = useState<ICar[] | { name: string }[]>([]);

  async function deleteData(id: number) {
    props.path.includes("carros")
      ? await deleteCar(id).catch((error) => {
          throw new Error(error);
        })
      : await deleteBrand(id).catch((error) => {
          throw new Error(error);
        });
  }

  function getDataByPath() {
    props.path.includes("carros")
      ? getCars().then((res) => setData(res))
      : getBrands().then((res) => setData(res));
  }

  useEffect(() => {
    getDataByPath();
  }, [data.length]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {props.header.map((d) => {
            return <th>{d.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData: any) => {
          return (
            <tr>
              {props.header.map((column) => {
                if (column?.renderRow) {
                  return (
                    <td>
                      <Link href={`${props.path}/${rowData.id}`}>
                        <Button
                          text="Editar"
                          padding="0.25rem 1rem"
                          radius="0.25rem"
                          color="#fff"
                          margin="0 1rem 0 0"
                          onClick={() => console.log("Clicou em Editar")}
                        />
                      </Link>
                      <Button
                        text="Excluir"
                        padding="0.25rem 1rem"
                        radius="0.25rem"
                        color="#fff"
                        margin="0"
                        onClick={() => {
                          deleteData(rowData.id).then(() => {
                            getDataByPath();
                          });
                        }}
                      />
                    </td>
                  );
                }
                return <td>{rowData[column.id]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
