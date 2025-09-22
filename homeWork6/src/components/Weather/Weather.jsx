import { useEffect, useState } from "react";
import cls from "./weather.module.scss";

export const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const KEY = "e417df62e04d3b1b111abeab19cea714";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric&lang=ru`
        );

        if (!response.ok) 
          throw new Error("Город не найден");
        }

        const data = await response.json();
        console.log(data);
        setWeather({
          temp: Math.round(data.main.temp),
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        });
        setError(null);
      } catch (err) {
        setWeather(null);
        setError(err.message);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className={cls.wrapper}>
      {error && <p className={cls.error}>{error}</p>}

      {weather && (
        <div className={cls.card}>
          <h2 className={cls.city}>{city}</h2>
          <p className={cls.temp}>{weather.temp}°C</p>
          <p className={cls.desc}>{weather.desc}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.desc}
          />
        </div>
      )}
    </div>
  );
};
