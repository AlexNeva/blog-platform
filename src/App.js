/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import CreateArticle from './pages/CreateArticle'
import EditArticle from './pages/EditArticle'
import EditProfile from './pages/EditProfile'
import NotFoundPage from './pages/NotFoundPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MainLayout from './Layouts/MainLayout';
import { fetchUser } from './store/asyncActions/user'
import Private from './hoc/Private';
import ErrorsAlert from './components/ErrorsAlert/ErrorsAlert';




function App() {


  const dispatch = useDispatch();
  const { isAuth, error: authError } = useSelector(state => state.user);
  const { error: articleError } = useSelector(state => state.articles);


  useEffect(() => {

    dispatch(fetchUser())

  }, [])

  return (
    <div className="App">
      <ErrorsAlert />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<ArticlesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/new-article" element={
            <Private>
              <CreateArticle />
            </Private>
          } />
          <Route path="/articles/:id/edit" element={<EditArticle />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={
            <Private>
              <EditProfile />
            </Private>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
