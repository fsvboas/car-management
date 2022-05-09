import Link from "next/link";
import { ICar } from "../pages/carros";
import styles from "../styles/components/Table.module.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { mappedObjectDataKeyToPortuguese } from "../utils/mapObjectDataKeyToPortuguese";

interface IProps {
  data: ICar[];
}

export function Table(props: IProps) {
  const [dataList, setDataList] = useState<{ key: string; value: any }[]>([]);

  function dynamicTable(item: any) {
    item.forEach((i: any) => {
      const list = [];

      for (const dynamicTableData in i) {
        list.push({
          key: mappedObjectDataKeyToPortuguese(dynamicTableData),
          value: i[dynamicTableData],
        });
      }

      setDataList(list);
    });
  }

  useEffect(() => {
    dynamicTable(props.data);
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {dataList.map((d: any) => {
            return <th>{d.key}</th>;
          })}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {dataList.map((d: any) => {
            return <td>{d.value}</td>;
          })}
          <td>
            <Link href="/carros/1">
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
              onClick={() => console.log("Clicou em Excluir")}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
