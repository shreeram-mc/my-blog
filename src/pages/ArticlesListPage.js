import React from 'react';
import ArticlesList from '../Components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = ({match}) =>  (
    <>
        <h1>Articles List</h1>
        <ArticlesList articles={articleContent} num={80} ></ArticlesList>
       
    </>
)

export default ArticlesListPage;