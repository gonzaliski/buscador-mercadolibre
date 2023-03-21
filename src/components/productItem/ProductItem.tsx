import { useNavigate } from "react-router-dom";
import css from "./ProductItem.css";

function ProductItem(props) {
  let navigate = useNavigate();
  const goProductDetail = () => {
    navigate(`/item/${props.id}`);
  };
  return (
    <div className={css["card"]}>
      <div className={css["card__item-container"]}>
        <div className={css["card__img-container"]}>
          <img
            className={css["card__item-img"]}
            src={props.imageURL}
            alt={"No image found"}
          ></img>
        </div>
        <div className={css["card__item-information"]}>
          <div>
            <h2 className={css["product__title"]} onClick={goProductDetail}>
              {props.productName}
            </h2>
            <b className={css["product__price"]}>$ {props.price}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductItem };
