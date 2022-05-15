import Link from "next/link";
import { ICar } from "../pages/api/cars/interface/ICar";
import styles from "../styles/components/Table.module.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { deleteCar } from "../pages/api/cars/deleteCar";
import { getCar } from "../pages/api/cars/getCar";
import { getBrand } from "../pages/api/brands/getBrand";
import { deleteBrand } from "../pages/api/brands/deleteBrand";
import { Modal } from "./Modal";
import { IBrand } from "../pages/api/brands/interface/IBrand";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

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
  message: string;
}

export function Table(props: TableProps) {
  const [data, setData] = useState<ICar[] | { name: string }[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  const [dataToExclude, setDataToExclude] = useState<ICar | IBrand>();

  async function deleteData(id: number) {
    console.log(id);
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
      ? getCar().then((res) => setData(res))
      : getBrand().then((res) => setData(res));
  }

  useEffect(() => {
    getDataByPath();
  }, [data.length]);

  function showToastDelete() {
    Store.addNotification({
      message: props.message,
      type: "success",
      container: "top-center",
      width: 300,
      dismiss: {
        duration: 2000,
      },
    });
  }

  return (
    <div>
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
                            icon={<GrEdit className={styles.buttonIcon} />}
                            padding="0.25rem 1rem"
                            radius="0.25rem"
                            color="#fff"
                            margin="0 1rem 0 0"
                            onClick={() => console.log("Clicou em Editar")}
                          />
                        </Link>
                        <Button
                          text="Excluir"
                          icon={<FaRegTrashAlt className={styles.buttonIcon} />}
                          padding="0.25rem 1rem"
                          radius="0.25rem"
                          color="#fff"
                          margin="0"
                          onClick={() => {
                            setOpen(true);
                            setDataToExclude(rowData);
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
      <Modal
        open={open}
        close={() => {
          setOpen(false);
        }}
        submit={() => {
          deleteData(dataToExclude?.id!).then(() => {
            getDataByPath();
            showToastDelete();
          });
        }}
        data={dataToExclude! as ICar}
      />
    </div>
  );
}
