import { UserCard } from "./UserCard";

export function UserList({ data }) {
  console.log(data);
  return (
    <div className="cardList">
      {data.map((item) => {
        if (item.active) return <UserCard key={item.id} data={item} />;
      })}
    </div>
  );
}
