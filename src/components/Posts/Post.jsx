export default function Post({ id, image, title, tags, owner }) {
  const { firstName, lastName } = owner;

  return (
    <article>
      <img src={image} alt={title} />
      <div className="content">
        <p>
          Tags:{" "}
          {tags &&
            tags.map((tag, idx) => {
              return (
                <span key={`${tag}-${idx}`} className="tag">
                  {tag}{" "}
                </span>
              );
            })}{" "}
        </p>
        <p>
          Publicado por: {firstName} {lastName}
        </p>
        <a href="#">Leer más</a>
      </div>
    </article>
  );
}
