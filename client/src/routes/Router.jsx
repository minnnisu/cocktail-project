import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import RandomPage from "../pages/RandomPage/RandomPage";
import RecipePage from "../pages/RecipePage/RecipePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import AlcoholAppendFormPage from "../pages/AlcoholAppendFormPage/AlcoholAppendFormPage";
import AlcoholViewerPage from "../pages/AlcoholViewerPage/AlcoholViewerPage";
import { QueryClient, QueryClientProvider } from "react-query";
import Mypage from "../pages/MyPage/Mypage";
import { useEffect, useState } from "react";
import Header from "../components/UI/Header/Header";

function Router() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser).username);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<RandomPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/alcohol/form" element={<AlcoholAppendFormPage />} />
          <Route path="/alcohol/viewer" element={<AlcoholViewerPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Router;
