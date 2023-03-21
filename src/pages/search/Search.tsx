import { SearchResult } from "../../components/searchResult/SearchResult";
import css from "./search.css";

function Search() {
  return (
    <div className={css["search__content"]}>
      <SearchResult></SearchResult>
    </div>
  );
}

export { Search };
