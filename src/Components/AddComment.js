import React, {useState} from 'react'; 

const AddCommentsSection = ({articleName, setArticleInfo}) => { 

    const [userName, setUserName] = useState('');
    const [commentText, setcommentText] = useState('');

    const submitComments = async () =>{
      
        setArticleInfo({ UserName:userName, Comments:commentText, articleName:articleName });
        setUserName('');
        setcommentText('');
    }

    return (
        <div id="add-comment-form">
            <label> Name: <input type="text" value={userName} placeholder="Your Name" onChange={(event)=> setUserName(event.target.value)} /> </label>
            <label> Comments: <textarea rows="4" cols="50" placeholder="Your Comments Here!" value={commentText} onChange={(event)=> setcommentText(event.target.value)}></textarea> </label>
            
            <button onClick={() => submitComments()}> Add Comment </button> 
        </div>);

};


export default  AddCommentsSection;

