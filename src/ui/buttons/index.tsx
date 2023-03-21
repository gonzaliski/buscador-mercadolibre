import css from "./buttons.css";

export function SearchButton({ children }) {
  return <button className={css["search"]}>{children}</button>;
}

export function MainButton({ children }) {
  return <button className={css["main__button"]}>{children}</button>;
}
