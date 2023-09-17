import { Navigate, Route, Routes } from "react-router-dom";

import Home from "pages/home";
import LoginPage from "pages/login";
import PostList from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostEdit from "pages/posts/edit";
import PostNew from "pages/posts/new";
import ProfilePage from "pages/profile";
import SignupPage from "pages/signup";

interface Props {
  isAuthenticated: boolean;
}

const Router = ({ isAuthenticated }: Props) => {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Router;
