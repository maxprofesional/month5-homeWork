import { useState, useCallback, useMemo } from "react";

export const FilteredList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Алексей", age: 25 },
    { id: 2, name: "Мария", age: 30 },
    { id: 3, name: "Иван", age: 22 },
    { id: 4, name: "Ольга", age: 28 },
    { id: 5, name: "Дмитрий", age: 35 },
    { id: 6, name: "Елена", age: 27 },
    { id: 7, name: "Сергей", age: 40 },
    { id: 8, name: "Анна", age: 24 },
    { id: 9, name: "Николай", age: 32 },
    { id: 10, name: "Татьяна", age: 29 },
  ]);

  const [search, setSearch] = useState("");

  const addUser = useCallback(() => {
    const newUser = {
      id: users.length + 1,
      name: "Новый User №" + users.length + 1,
      age: Math.floor(Math.random() * 41) + 20,
    };
    setUsers((prev) => [...prev, newUser]);
    console.log("добавление запустилась");
  }, [users.length]);

  const userFilterForName = useMemo(() => {
    console.log("Фильтрация запустилась");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <div>
      <h2>Список пользователей</h2>

      <input
        type="text"
        placeholder="Поиск по имени"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={addUser}>Добавить пользователя</button>

      <ul>
        {userFilterForName.map((user) => (
          <li key={user.id}>
            {user.name} — {user.age} лет
          </li>
        ))}
      </ul>
    </div>
  );
};
