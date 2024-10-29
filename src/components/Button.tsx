import { css } from "vite-plugin-tailwind-scope/css";
import styles from "./styles/Button.module.css";
import { useState } from "react";

const buttonClasses = ["rounded-xl", "text-6xl", "text-white", "bg-blue-500"];
export const Button = () => {
  const [color, setColor] = useState("bg-red-500");

  return (
    <>
      <button
        onClick={() => setColor("bg-red-500")}
        className={css(styles)`text-4xl text-white bg-red-500`}
      >
        红色
      </button>
      <button
        onClick={() => setColor("bg-blue-500")}
        className={css(styles)(buttonClasses)}
      >
        蓝色
      </button>
      <div className={css(styles)(["size-10", color])}></div>
    </>
  );
};
