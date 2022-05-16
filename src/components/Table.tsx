import Link from "next/link";
import styles from "../styles/components/Table.module.css";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { ICar } from "../pages/api/cars/interface/ICar";
import { getCar } from "../pages/api/cars/getCar";
import { deleteCar } from "../pages/api/cars/deleteCar";
import { IBrand } from "../pages/api/brands/interface/IBrand";
import { getBrand } from "../pages/api/brands/getBrand";
import { deleteBrand } from "../pages/api/brands/deleteBrand";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useMutation, useQueryClient } from "react-query";

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
  const [open, setOpen] = useState<boolean>(false);
  const [dataToExclude, setDataToExclude] = useState<ICar | IBrand>();

  const queryClient = useQueryClient();

  function deleteData(id: string) {
    props.path.includes("carros")
      ? carMutation.mutate(id)
      : brandMutation.mutate(id);
  }

  const carMutation = useMutation(deleteCar, {
    onSuccess: () => {
      showToastDelete({ message: "Carro excluído com sucesso!" });
      queryClient.invalidateQueries("cars");
    },
  });

  const brandMutation = useMutation(deleteBrand, {
    onSuccess: () => {
      showToastDelete({ message: "Marca excluída com sucesso!" });
      queryClient.invalidateQueries("brands");
    },
  });

  function showToastDelete({ message }: { message: String }) {
    Store.addNotification({
      message: message,
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
          {props.data.map((rowData: any) => {
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
          deleteData(dataToExclude?.id!);
        }}
        data={dataToExclude! as ICar}
      />
    </div>
  );
}
