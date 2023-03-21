import css from "./buttons.css";

export function SearchButton({ children }) {
  return <button className={css["search"]}>{children}</button>;
}

export function MainButton(props: MainButtonProps) {
  return (
    <button onClick={props.onClick} className={css["main__button"]}>
      {props.children}
    </button>
  );
}
