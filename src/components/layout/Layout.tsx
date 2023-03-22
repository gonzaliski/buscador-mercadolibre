import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingSpinner from "../loader/Loader";
import { SearchForm } from "../searchForm/SearchForm";
import meLiLogo from "../../assets/mercadolibre.svg";
import reactLogo from "../../assets/react.svg";
import recoilLogo from "../../assets/recoil-js.svg";
import tsLogo from "../../assets/typescript.svg";
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
        <div className={css["tools__container"]}>
          <img src={reactLogo} className={css["logo__tool"]}></img>
          <img src={recoilLogo} className={css["logo__tool"]}></img>
          <img src={tsLogo} className={css["logo__tool"]}></img>
        </div>
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
