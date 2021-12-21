import React from 'react';


// import PostsService from '../API/PostsService';
import ArticleList from '../components/Article/ArticleList';

// const postService = new PostsService()

// postService.getAllArticles(5, 0)
//   .then(articles => console.log(articles))

function ArticlesPage() {
  return (
    <div className='ArticlesPage container'>
      <ArticleList />

    </div>
  );
}

export default ArticlesPage;