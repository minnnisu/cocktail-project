import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PostDetail from "../components/Post/PostDetail/PostDetail";
import AllPost from "../components/Post/AllPost/AllPost";
import MyPost from "../components/Post/MyPost/MyPost";
import PostUploader from "../components/Post/PostUploader/PostUploader";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PostUpload from "../components/Post/PostUpload/PostUpload";
import PostModifier from "../components/Post/PostModifier/PostModifier";
import CocktailDetailPage from "../pages/CocktailDetailPage/CocktailDetailPage";

function MainRouter() {
  const queryClient = new QueryClient();
  const { user } = new useContext(AuthContext);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/random" element={<RandomPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/recipe/:id" element={<CocktailDetailPage />} />
          <Route path="/post" element={<AllPost />} />
          <Route path="/post/upload" element={<PostUploader />} />
          <Route path={`/post/${user}`} element={<MyPost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/:id/modify" element={<PostModifier />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/alcohol/form" element={<AlcoholAppendFormPage />} />
          <Route path="/alcohol/viewer" element={<AlcoholViewerPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default MainRouter;
