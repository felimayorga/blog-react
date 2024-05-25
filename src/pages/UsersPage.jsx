import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

import { Header, UserList } from "../components";

export function UsersPage() {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <>
      <Header />

      <main className="user-profile">
        <h1>Usuarios</h1>
        {!user ? (
          <>
            <h2>Vista protegida</h2>
            <button onClick={login} style={{ marginBottom: "20px" }}>
              <span>Iniciar sesión con Google</span>
            </button>
          </>
        ) : (
          <>
            <h2>Vista pública</h2>
            <button onClick={logOut} style={{ marginBottom: "20px" }}>
              <span>Cerrar sesión</span>
            </button>

            <UserList />
          </>
        )}
      </main>
    </>
  );
}
