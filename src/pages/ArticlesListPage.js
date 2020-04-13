import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import ArticlesList from '../Components/ArticlesList';
// import articleContent from './article-content';
import { getData } from "../actions/index";

 
class ArticlesListPage extends Component {

    componentDidMount() {
        // calling the new action creator
        this.props.getData();
      }

    render() { 

        return (
            <>
            <h1>Articles List</h1>
            <Link title="Add New" to="/article/add" >Add New</Link>
            <ArticlesList articles={this.props.articleContent} num={80} ></ArticlesList>
           
        </>
        )
    } 
}

function mapStateToProps(state) {
    return {
        articleContent: state.remoteArticles
    };
  }
export default connect(
    mapStateToProps,
    { getData }
  )(ArticlesListPage);

 