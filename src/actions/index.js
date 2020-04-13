
import Constants from "../Constants/Constants";

export function addArticle(payload) {
  return function (dispatch) {
    return fetch(`${Constants.BASE_API_URL}/api/articles`, {
      method: 'post',
      body: JSON.stringify({ name: payload.name, text: payload.text, upvote:payload.upvote }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: Constants.ADD_ARTICLE, payload: json });
      });
  };  
}

export function addComments(payload) {

  return function (dispatch) {
    return fetch(`${Constants.BASE_API_URL}/api/articles/${payload.articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ UserName: payload.UserName, Comments: payload.Comments }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: Constants.ADD_COMMENT, payload: json });
      });
  };
}

export function upvote(payload) {

  return function (dispatch) {
    return fetch(`${Constants.BASE_API_URL}/api/articles/${payload.articleName}/upvote`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: Constants.ADD_UPVOTE, payload: json });
      });
  };
}

export function getData() {
  return function (dispatch, getState) {

    if (getState().remoteArticles.length === 0) {
      return fetch(`${Constants.BASE_API_URL}/api/articles/`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: Constants.DATA_LOADED, payload: json });
        });
    }
  };
}