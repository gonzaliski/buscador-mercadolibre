import { useSearchResults } from "hooks";
import React from "react";
import { ProductItem } from "../productItem/ProductItem";
import css from "./searchResult.css";

function SearchResult() {
  const searchResults = useSearchResults();
  return (
    <div className={css["content"]}>
      {searchResults.map((r) => (
        <ProductItem
          imageURL={r.thumbnail}
          productName={r.title}
          price={r.price}
          id={r.id}
          key={r.id}
        />
      ))}
    </div>
  );
}

export { SearchResult };
