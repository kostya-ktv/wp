import { useState } from "react";
import styles from "./app.module.scss";

export const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Hello{counter}
      <button
        className={styles.btn}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Click
      </button>
    </div>
  );
};
