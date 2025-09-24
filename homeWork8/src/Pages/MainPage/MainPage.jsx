import React from "react";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать в проект о постах!</h1>
      <p className={styles.subtitle}>
        Здесь вы можете просматривать посты, фильтровать их, добавлять новые и
        изучать работу с React, хуками и компонентной структурой.
      </p>
    </div>
  );
};
