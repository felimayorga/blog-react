import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/users">Usuarios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
