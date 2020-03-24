import React, {useState, useEffect} from 'react';
import ReactHtmlParser from 'react-html-parser';
import articleContent from './article-content';
import ArticlesList from '../Components/ArticlesList';
import CommentsList from '../Components/CommentsList';
import NotFound from './NotFound';
import { BASE_API_URL} from '../Constants/Constants';
import UpVoteSection from '../Components/UpVoteSection';
import AddCommentsSection from '../Components/AddComment';

const ArticlePage = ({ match }) => {

    const name = match.params.name;
    const article = articleContent.find(a => a.name === name);
    const articleRelated = articleContent.filter(a=>a.name!== name);

    const [articleInfo, setArticleInfo] = useState({upVotes:0, comments:[], text:''});
    
    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(`${BASE_API_URL}/api/articles/${name}`);

            const body = await result.json();

            setArticleInfo(body);
        }

        fetchData();

        window.scrollTo(0, 0);
    },[name])

    if (!article)
        return <NotFound></NotFound>

    return (<>
        <h1> {article.title} </h1>
        <UpVoteSection name={name} upVotes={articleInfo.upVotes} setArticleInfo={setArticleInfo}/>
        
            {article.content.map((pa, k) => (
                <p key={k}>{pa}</p>
            ))
            }

            {ReactHtmlParser(articleInfo.text)}
        
        <AddCommentsSection articleName={name}  setArticleInfo={setArticleInfo} />
        <CommentsList comments={articleInfo.comments} />
        <hr />
        <h3>Related Articles</h3>
        <ArticlesList articles={articleRelated} num={200}/>
    </>
    );
}

export default ArticlePage;