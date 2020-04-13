import React from 'react';
import {Link} from 'react-router-dom';


class ArticlesList extends React.Component{ 



    render(){
        
        const articles = this.props.articles;
        const limit = this.props.num || 150;
        return <>
        {articles.map((art,key)=>(
            <Link className="article-list-item" key={key} to={`/article/${art.name}`} >
                <h3>{art.name}</h3>
                <p>{art.text.substr(0,limit)}...</p>
               
            </Link>
        ))}

       
       
    </>;
    }
}

 export default ArticlesList;
//export default ArticlesList;