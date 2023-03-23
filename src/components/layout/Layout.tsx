import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingSpinner from "../loader/Loader";
import { SearchForm } from "../searchForm/SearchForm";
import MeLiLogo from "../../assets/mercadolibre.svg";
import ReactLogo from "../../assets/react.svg";
import RecoilLogo from "../../assets/recoil-js.svg";
import TsLogo from "../../assets/typescript.svg";
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
        <MeLiLogo className={css["logo"]} onClick={goHome}></MeLiLogo>
        <SearchForm onSearch={handleSearch} />
        <div className={css["tools__container"]}>
          <ReactLogo className={css["logo__tool"]}></ReactLogo>
          <RecoilLogo className={css["logo__tool"]}></RecoilLogo>
          <TsLogo className={css["logo__tool"]}></TsLogo>
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
