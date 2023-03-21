import { ProductDetail } from "components/productDetail/ProductDetail";
import { useItemResult } from "../../hooks";
import css from "./item.css";
function Item() {
  const product = useItemResult();
  console.log(product);
  return (
    <div className={css["slider__container"]}>
      <ProductDetail />
    </div>
  );
}

export { Item };
