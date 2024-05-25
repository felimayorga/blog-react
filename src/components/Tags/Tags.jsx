import { Link } from "react-router-dom";

export default function Tags() {
  return (
    <section className="tags">
      <h2>Tags Populares</h2>
      <ul>
        <li>
          <Link to="/tag/animal">Animal</Link>
        </li>
        <li>
          <Link to="/tag/dog">Dog</Link>
        </li>
        <li>
          <Link to="/tag/golden retriever">Golden Retriever</Link>
        </li>
        <li>
          <Link to="/tag/snow">Snow</Link>
        </li>
        <li>
          <Link to="/tag/ice">Ice</Link>
        </li>
        <li>
          <Link to="/tag/mountain">Mountain</Link>
        </li>
      </ul>
    </section>
  );
}
