import Link from "next/link";
import { IBrand } from "../pages/api/brands/interface/IBrand";
import { ICar } from "../pages/api/cars/interface/ICar";
import styles from "../styles/components/Modal.module.css";
import Button from "./Button";

type ModalProps = {
  open: boolean;
  close: () => void;
  submit: () => void;
  data: ICar | IBrand;
};

export function Modal({ open, close, submit, data }: ModalProps) {
  return (
    <div className={open === true ? styles.container : styles.invisible}>
      <div className={styles.modal}>
        <h1>
          Tem certeza que deseja excluir
          {/*  @ts-ignore. */}
          {data?.plate ? ` a placa "${data?.plate}" ?` : ` a marca "${data?.name}" ?`}
        </h1>
        <h3>Essa ação não poderá ser desfeita.</h3>
        <div className={styles.modalButtons}>
          <Button
            text="Sim"
            padding="0.25rem 1rem"
            radius="0.25rem"
            color="#fff"
            margin="0rem 1rem 0rem 0rem"
            onClick={() => {
              close();
              submit();
            }}
          />
          <Button
            text="Não"
            padding="0.25rem 1rem"
            radius="0.25rem"
            color="#fff"
            margin="0"
            onClick={() => {
              close();
            }}
          />
        </div>
      </div>
    </div>
  );
}
