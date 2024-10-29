import { css } from "vite-plugin-tailwind-scope/css";
import styles from "./styles/Card.module.css";

export const Card = () => {
  return (
    <div className={css(styles)`shadow-md p-4 text-white bg-cyan-500`}>
      This is a card
    </div>
  );
};
