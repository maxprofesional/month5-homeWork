export function UserCard({ data }) {
  const { id, name, age, city } = data;
  return (
    <div className="card">
      <h2>{name || "нет данных"}</h2>
      <h3>{id}</h3>
      <p>
        <strong>Возраст: {age || "нет данных"}</strong>
      </p>
      <p>
        <strong>Город: {city || "нет данных"}</strong>
      </p>
    </div>
  );
}
