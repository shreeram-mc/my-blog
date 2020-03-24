import React, {useState} from 'react';
import {BASE_API_URL} from '../Constants/Constants';

const AddCommentsSection = ({articleName, setArticleInfo}) => {

    const [userName, setUserName] = useState('');
    const [commentText, setcommentText] = useState('');

    const submitComments = async () =>{
        
        const result = await fetch(`${BASE_API_URL}/api/articles/${articleName}/add-comment`, {
            method:'post',
            body: JSON.stringify({ UserName:userName, Comments:commentText }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const body = await result.json();

        setArticleInfo(body);
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


export default AddCommentsSection;

