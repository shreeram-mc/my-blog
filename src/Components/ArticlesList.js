import React from 'react';
import {Link} from 'react-router-dom';

// const ArticlesList = ({articles, num=150}) => (
//     <>
//         {articles.map((art,key)=>(
//             <Link className="article-list-item" key={key} to={`/article/${art.name}`} >
//                 <h3>{art.title}</h3>
//                 <p>{art.content[0].substr(0,num)}...</p>
//             </Link>
//         ))}
       
//     </>
// );

class ArticlesList extends React.Component{

    render(){

        const articles = this.props.articles;
        const limit = this.props.num || 150;
        return <>
        {articles.map((art,key)=>(
            <Link className="article-list-item" key={key} to={`/article/${art.name}`} >
                <h3>{art.title}</h3>
                <p>{art.content[0].substr(0,limit)}...</p>
            </Link>
        ))}
       
    </>;
    }
}

export default ArticlesList;