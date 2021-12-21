import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import CreateArticle from './pages/CreateArticle'
import EditArticle from './pages/EditArticle'
import EditProfile from './pages/EditProfile'
import NotFoundPage from './pages/NotFoundPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MainLayout from './Layouts/MainLayout';





function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<ArticlesPage />} />
          <Route path="articles/*" element={<ArticlePage />} />
          <Route path="article/new" element={<CreateArticle />} />
          <Route path="article/edit" element={<EditArticle />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
