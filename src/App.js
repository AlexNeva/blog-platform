/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { message } from 'antd';
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




function App() {

  // const [ready, setReady] = useState(false)

  const dispatch = useDispatch();
  const { isAuth, fetching, error } = useSelector(state => state.user);


  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  useEffect(() => {
    if (error) {
      message.info(error);
    }
  }, [error])





  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<ArticlesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/new-article" element={isAuth ? <CreateArticle /> : <Navigate to='/sign-in' />} />
          <Route path="/articles/:id/edit" element={<EditArticle />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={isAuth ? <EditProfile /> : <Navigate to='/sign-in' />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}




export default App;
