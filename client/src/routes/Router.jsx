import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlcoholAppendFormPage from "../pages/AlcoholAppendFormPage/AlcoholAppendFormPage";
import StoredAlcoholViewerPage from "../pages/StoredAlcoholViewerPage/StoredAlcoholViewerPage";
import MainPage from "../pages/MainPage/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/alcohol/form" element={<AlcoholAppendFormPage />} />
        <Route path="/alcohol/viewer" element={<StoredAlcoholViewerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
