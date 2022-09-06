import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import styles from "./style.module.css";

function AuthorizationHOC() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    let timer: string | number | NodeJS.Timeout | undefined;

    if (token) {
      const payload: { userId: string; iat: number; exp: number } =
        jwtDecode(token);

      timer = setInterval(() => {
        if (Date.now() > payload.exp * 1000) {
          clearInterval(timer);
          navigate("/signout");
        }
      }, 0);
    }

    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <main className={styles["protected-routes-layout"]}>
      <header className={styles["protected-route-header"]}>
        <nav className={styles["protected-route-nav"]}>
          <ul>
            <li>
              <Link to={"/posts"}>Posts</Link>
            </li>

            <li>
              <Link to={"/my-profile"}>My Profile</Link>
            </li>
            <li>
              <Link to={"/signout"}>SignOut</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles["protected-route-content"]}>
        <Outlet />
      </div>
    </main>
  );
}

export default AuthorizationHOC;
