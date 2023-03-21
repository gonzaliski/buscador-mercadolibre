import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import { AppRoutes } from "./router/router";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </RecoilRoot>
);
