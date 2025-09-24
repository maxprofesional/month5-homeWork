import React from "react";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        Страница не найдена. Возможно, вы ошиблись в адресе.
      </p>
    </div>
  );
};
