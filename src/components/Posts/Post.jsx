import { Link } from "react-router-dom";

export default function Post({
  id,
  image,
  title,
  tags,
  owner,
  text = null,
  noCta,
}) {
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
        {noCta && text ? <p>{text}</p> : null}
        {!noCta ? <Link to={`/post/${id}`}>Leer más</Link> : null}
      </div>
    </article>
  );
}
