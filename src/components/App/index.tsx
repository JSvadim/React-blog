// hooks
import { useEffect } from 'react';

// third-party
import { Routes, Route } from 'react-router-dom';

// local imports
import Header from "../Header/index";
import LogInPage from "../../pages/LogIn/index";
import SignInPage from "../../pages/SignIn/index";
import AddBlogPage from '../../pages/AddBlog';
import MyBlogsPage from '../../pages/MyBlogs';
import BlogsPage from '../../pages/Blogs';
import BlogPage from '../../pages/Blog';
import NotFoundPage from '../../pages/NotFound';
import { AuthController } from '../../controllers/auth-controller';
import { localStorageAccessToken } from '../../constants/local-storage';


const App: React.FC = () => {
  useEffect(() => {
    const checkAuth = async () => {
      await AuthController.refresh()
    }

    if(localStorage.getItem(localStorageAccessToken)) {
      checkAuth();
    }
  } , [])

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={ <BlogsPage/> }/>
          <Route path="/blog" element={ <BlogPage/> }/>
          <Route path="/my-blogs" element={ <MyBlogsPage/> }/>
          <Route path="/add-blog" element={ <AddBlogPage/> }/>
          <Route path="/log-in" element={ <LogInPage/> }/>
          <Route path="/sign-in" element={ <SignInPage/> }/>
          <Route path="*" element={ <NotFoundPage/> }/>
        </Routes>
    </>
  );

}

export default App;
