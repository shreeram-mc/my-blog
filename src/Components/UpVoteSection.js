import React from 'react';
import { BASE_API_URL} from '../Constants/Constants';

const UpvoteSection = ({name, upVotes, setArticleInfo}) => {

    const UpVoteArticles = async () =>{
      const result =  await fetch(`${BASE_API_URL}/api/articles/${name}/upvote`);

      const body = await result.json();

      setArticleInfo(body);

    } 

    return(
    <div id="upvote-section">
        <button onClick={() => UpVoteArticles()}> Add UpVote </button> 
        <p>&nbsp;&nbsp;&nbsp; This article has been upVoted {upVotes} times </p>
    </div>
    )
};


export default UpvoteSection;