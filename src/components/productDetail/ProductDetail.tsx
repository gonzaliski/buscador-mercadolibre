import css from "./ProductDetail.css";
import { MainButton } from "ui/buttons";
import { MySlider } from "components/slider/Slider";
import { useItemResult } from "hooks";
import LoadingSpinner from "components/loader/Loader";
import { useNavigate } from "react-router-dom";

export function ProductDetail() {
  let navigate = useNavigate();

  const product = useItemResult();
  console.log(product);
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
        <MainButton
          onClick={() => {
            navigate(product.permalink, { replace: true });
          }}
        >
          Ver producto
        </MainButton>
        <div className={css["card__item-stock-amount"]}>
          <span>stock disponible: {product.available_quantity}</span>
        </div>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
