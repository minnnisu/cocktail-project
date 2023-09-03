import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlcoholAppendFormPage from "../pages/AlcoholAppendFormPage/AlcoholAppendFormPage";
import MainPage from "../pages/MainPage/MainPage";
import AlcoholViewerPage from "../pages/AlcoholViewerPage/AlcoholViewerPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/Signup/SignUpPage";
import { QueryClient, QueryClientProvider } from "react-query";

function Router() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/alcohol/form" element={<AlcoholAppendFormPage />} />
          <Route path="/alcohol/viewer" element={<AlcoholViewerPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Router;
