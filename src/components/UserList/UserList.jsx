import { useQuery } from "@tanstack/react-query";

import { apiInstance } from "../../services/api";
import UserCard from "./UserCard";

export default function UserList() {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => apiInstance.get("/user?limit=10").then((res) => res.data),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError || !users.data) return <p>Error al cargar los usuarios</p>;

  const { data } = users;

  return data.map((user) => <UserCard key={user.id} {...user} />);
}
