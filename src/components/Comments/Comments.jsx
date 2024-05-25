import { useQuery } from "@tanstack/react-query";
import { format } from "@formkit/tempo";

import { apiInstance } from "../../services/api";

export default function Comments({ postId }) {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () =>
      apiInstance.get(`/post/${postId}/comment`).then((res) => res.data),
  });

  return (
    <section className="comments">
      <h3>Comentarios</h3>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error al cargar los comentarios</p>}

      {comments && comments.data.length > 0 ? (
        comments.data.map((comment) => {
          const { id, message, owner, publishDate } = comment;
          const date = new Date(publishDate);
          const formattedDate = format(date, "full", "es");

          return (
            <div key={id} className="comment">
              <p>
                <strong>
                  {owner.firstName} {owner.lastName}:
                </strong>{" "}
                {message}
              </p>
              <p>
                <em>Publicado el {formattedDate}</em>
              </p>
            </div>
          );
        })
      ) : (
        <p>No hay comentarios</p>
      )}
    </section>
  );
}
