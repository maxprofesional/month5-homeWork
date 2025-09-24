import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>О проекте</h1>
      <p className={styles.description}>
        Этот проект посвящён работе с постами. Здесь вы можете просматривать
        список постов, фильтровать их по имени автора или добавлять новые. Цель
        проекта — практическая работа с React, использованием хуков,
        маршрутизацией и организацией UI с помощью компонентной структуры.
      </p>
    </div>
  );
};
