import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { apiInstance } from "../../services/api";
import { Post } from "../";

export default function TagPosts() {
  const { tagId } = useParams();
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tagPosts", tagId],
    queryFn: () =>
      apiInstance.get(`/tag/${tagId}/post?limit=10`).then((res) => res.data),
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
