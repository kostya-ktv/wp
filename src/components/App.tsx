import { useState } from "react";
import styles from "./app.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <br />
      Hello{counter}
      <br />
      <button
        className={styles.btn}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Click
      </button>
      <Outlet />
    </div>
  );
};
