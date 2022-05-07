import { ReactNode } from "react";

import Link from "next/link";

import styles from "../styles/components/Header.module.css";

export function Header() {
  return (
    <div className={styles.links}>
      <Link href="/carros">
        <a>Carros</a>
      </Link>
      <Link href="/marcas">
        <a>Marcas</a>
      </Link>
    </div>
  );
}
