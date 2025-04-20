import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CompanyPage from "./pages/company/CompanyPage..jsx";
import CompanyDetailPage from "./pages/company-detail/CompanyDetailPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<CompanyPage />} />{" "}
      <Route path="detail/:id" element={<CompanyDetailPage />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Pass the store here */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
