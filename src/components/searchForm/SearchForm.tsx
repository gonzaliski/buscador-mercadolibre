import React from "react";
import { SearchButton } from "../../ui/buttons";
import { SearchInput } from "../../ui/inputs";
import css from "./searchForm.css";

function SearchForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.onSearch) {
      props.onSearch(e.target.search.value);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css["search__form"]}>
      <SearchInput></SearchInput>
      <SearchButton>{"Buscar"}</SearchButton>
    </form>
  );
}

export { SearchForm };
