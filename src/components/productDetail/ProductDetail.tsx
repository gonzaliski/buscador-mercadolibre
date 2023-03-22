import LoadingSpinner from "components/loader/Loader";
import { MySlider } from "components/slider/Slider";
import { useItemResult } from "hooks";
import { Link } from "react-router-dom";
import { MainButton } from "ui/buttons";
import css from "./ProductDetail.css";

export function ProductDetail() {
  const product = useItemResult();
  return product ? (
    <div className={css["item__container"]}>
      <MySlider pictures={product.pictures} />
      <div className={css["card__item-information"]}>
        <p className={css["card__item-condition"]}>
          {product.condition == "new" ? "Nuevo" : "Usado"} |{" "}
          <span className={css["card__item-solds"]}>
            {product.sold_quantity} vendidos
          </span>
        </p>
        <h2 className={css["card__item-information-title"]}>{product.title}</h2>
        <span>$ {product.price}</span>
        <Link to={product.permalink}>
          <MainButton>Ver producto</MainButton>
        </Link>
        <div className={css["card__item-stock-amount"]}>
          <span>stock disponible: {product.available_quantity}</span>
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
