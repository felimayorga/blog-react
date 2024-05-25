import { useQuery } from "@tanstack/react-query";

import { apiInstance } from "../../services/api";
import Post from "./Post";

export default function Posts() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => apiInstance.get("/post?limit=10").then((res) => res.data),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError || !posts.data) return <p>Error al cargar los posts</p>;

  const { data } = posts;

  return (
    <>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}
