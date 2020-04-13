import React, { Component } from 'react'; 
import CommentsList from '../Components/CommentsList';
import NotFound from './NotFound';
import UpVoteSection from '../Components/UpVoteSection';
import AddCommentsSection from '../Components/AddComment';
import ArticlesList from '../Components/ArticlesList';
import { addComments, upvote } from "../actions/index"; 
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.remoteArticles };
};

function mapDispatchToProps(dispatch) {

  return {
    AddComment: comments => dispatch(addComments(comments)),
    AddUpVote: upvotedArticle => dispatch(upvote(upvotedArticle))
  };
}

class ArticlePage extends Component {

  constructor(props) {
    super(props)
    this.handleAddComment = this.handleAddComment.bind(this)
    this.handleAddUpVote = this.handleAddUpVote.bind(this)

  }

  handleAddComment(article) {
    this.props.AddComment(article);
  }

  handleAddUpVote(article) {
    this.props.AddUpVote(article);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {

    const name = this.props.match.params.name;
    const larticles = this.props.articles;
    const article = larticles.find(a => a.name === name);

    if (!article)
      return (<NotFound></NotFound>);

    const articleRelated = larticles.filter(a => a.name !== name);

    return (<>
      <h1> {article.title} </h1>
      <UpVoteSection name={name} upVotes={article.upVotes} setArticleInfo={this.handleAddUpVote} />


      <p id="p_wrap">{article.text}</p>


      <AddCommentsSection articleName={name} setArticleInfo={this.handleAddComment} />
      <CommentsList comments={article.comments} articleName={name} />
      <hr />
      <br/>
      <br/>
      <h3>Related Articles</h3>
      <ArticlesList articles={articleRelated} num={200}/> 
      
    </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);