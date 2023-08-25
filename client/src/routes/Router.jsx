import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlcoholAppendFormPage from "../pages/AlcoholAppendFormPage/AlcoholAppendFormPage";
import MainPage from "../pages/MainPage/MainPage";
import AlcoholViewerPage from "../pages/AlcoholViewerPage/AlcoholViewerPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/alcohol/form" element={<AlcoholAppendFormPage />} />
        <Route path="/alcohol/viewer" element={<AlcoholViewerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
