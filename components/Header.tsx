import styles from './Header.module.css'
import {ReactElement} from "react";

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>GreenScreen</h1>
    </header>
  );
}