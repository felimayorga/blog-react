import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { Comments, Header, Post } from "../components";
import { apiInstance } from "../services/api";

export function PostPage() {
  const { postId } = useParams();

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => apiInstance.get(`/post/${postId}`).then((res) => res.data),
  });

  return (
    <>
      <Header />

      <main className="post">
        {isLoading && <p>Cargando...</p>}
        {isError && <p>Error al cargar la publicación</p>}
        {post ? <Post {...post} noCta /> : null}

        <Comments postId={postId} />
      </main>
    </>
  );
}
