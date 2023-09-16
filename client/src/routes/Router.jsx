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
import Header from "../components/UI/Header/Header";
import PostPage from "../pages/PostPage/PostPage";
import { AuthProvider } from "../contexts/AuthContext";

function Router() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/random" element={<RandomPage />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/alcohol/form" element={<AlcoholAppendFormPage />} />
            <Route path="/alcohol/viewer" element={<AlcoholViewerPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default Router;
