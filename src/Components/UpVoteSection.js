import React from 'react';

const UpvoteSection = ({name, upVotes, setArticleInfo}) => {

    const UpVoteArticles = async () =>{ 
      setArticleInfo({articleName:name }); 
    } 

    return(
    <div id="upvote-section">
        <button onClick={() => UpVoteArticles()}> Add UpVote </button> 
        <p>&nbsp;&nbsp;&nbsp; This article has been upVoted {upVotes} times </p>
    </div>
    )
};


export default UpvoteSection;