import { useEffect, useState } from "react";
import cls from "./WeatherSearch.module.scss";
import { Weather } from "../Weather/Weather";

export function WeatherSearch() {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setSelectedCity(city);
    }, 1000);

    return () => clearTimeout(id);
  }, [city]);
  return (
    <>
      <div className={cls.card_wrapper}>
        <input
          type="text"
          value={city}
          placeholder="Введите город..."
          className={cls.input_city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>{selectedCity && <Weather city={selectedCity} />}</div>
    </>
  );
}
