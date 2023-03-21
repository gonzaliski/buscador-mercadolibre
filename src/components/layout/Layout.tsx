import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingSpinner from "../loader/Loader";
import { SearchForm } from "../searchForm/SearchForm";
import meLiLogo from "../../assets/mercadolibre.svg";
import css from "./layout.css";
function Layout() {
  let navigate = useNavigate();
  function goHome() {
    navigate("/", { replace: true });
  }
  async function handleSearch(searchQuery) {
    navigate(`/search/${searchQuery}`, { replace: true });
  }
  return (
    <div>
      <header className={css["search__header"]}>
        <img src={meLiLogo} className={css["logo"]} onClick={goHome}></img>
        <SearchForm onSearch={handleSearch} />
        <span className={css["creator__name"]}>By Gonzaliski</span>
      </header>
      <section className={css["content"]}>
        <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
}

export { Layout };
