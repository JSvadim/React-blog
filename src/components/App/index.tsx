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
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ErrorBoundary } from '../ErrorBoundary';
import { MessageWithBackground } from '../messages/MessageWithBackground';
import { errorBoundaryVocabulary } from '../../vocabulary/components/ErrorBoundary';
import style from "./style.module.scss";


const App: React.FC = () => {
  useEffect(() => {
    const checkAuth = async () => {
      await AuthController.refresh()
    }

    if(localStorage.getItem(localStorageAccessToken)) {
      checkAuth();
    }
  } , [])
  const { user } = useTypedSelector(state => state.user);
  const { language } = useTypedSelector(state => state.language);
  const fallbackComponents = {
    header: <MessageWithBackground
      theme="black"
      position="custom"
      textClassName={style["header-error"]}
      backgroundClassName={style["header-error-background"]}
      text={errorBoundaryVocabulary.error[language]}/>,
    route: <MessageWithBackground
      theme="white"
      position="custom"
      textClassName={style["header-error"]}
      backgroundClassName={style["route-error-background"]}
      text={errorBoundaryVocabulary.error[language]}/>,
  }


  return (
    <>
      <ErrorBoundary fallbackComponent={fallbackComponents.header}>
        <Header/>
      </ErrorBoundary>
      <Routes>
          <Route path="/" element={ 
            <ErrorBoundary fallbackComponent={fallbackComponents.route}>
              <BlogsPage/>
            </ErrorBoundary>
          }/>
          <Route path="/blog" element={
            <ErrorBoundary fallbackComponent={fallbackComponents.route}>
              <BlogPage/>
            </ErrorBoundary>
          }/>
          <Route path="/my-blogs" element={
            <ErrorBoundary fallbackComponent={fallbackComponents.route}>
              {user !== null ? <MyBlogsPage/> : <LogInPage/>}
            </ErrorBoundary>
          }/>
          <Route path="/add-blog" element={
            <ErrorBoundary fallbackComponent={fallbackComponents.route}>
              {user !== null ? <AddBlogPage/> : <LogInPage/> }
            </ErrorBoundary>
          }/>
          <Route path="/log-in" element={
            <ErrorBoundary fallbackComponent={fallbackComponents.route}>
              {user !== null ? <BlogsPage/> : <LogInPage/>}
            </ErrorBoundary>
          }/>
          <Route path="/sign-in" element={
            <ErrorBoundary fallbackComponent={fallbackComponents.route}>
              {user !== null ? <BlogsPage/> : <SignInPage/>}
            </ErrorBoundary>
          }/>
          <Route path="*" element={ 
            <ErrorBoundary fallbackComponent={fallbackComponents.route}>
              <NotFoundPage/>
            </ErrorBoundary>
           }/>
      </Routes>
    </>
  );

}

export default App;
