import { useState } from "react";
import styles from "./app.module.scss";
import { Link, Outlet } from "react-router-dom";
import Avatar from "@/assets/avatar.jpg";
import ScreenShot from "@/assets/screenshot.png";
import Vercel from "@/assets/vercel.svg";

export const App = () => {
  const [counter, setCounter] = useState(0);
  if (__PLATFORM__ === "mobile") {
    return <h2>Mobile screen</h2>;
  }
  return (
    <div>
      <h1>{__PLATFORM__}</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <br />
      <img src={Avatar} style={{ width: 200 }} />
      <img src={ScreenShot} style={{ width: 200 }} />
      <Vercel width={100} stroke="red" color="yellow" />
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
