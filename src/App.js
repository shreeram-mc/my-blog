import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {Provider} from 'react-redux';

import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import AddArticle from './pages/AddArticle';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';
import store from './store/index';
//import { addArticle } from "./actions/index";

//console.log(store);

window.store = store;
//window.addArticle = addArticle;

function App() {
  return (
    <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className="App">
        <div>
          <NavBar></NavBar>
        </div>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/about" component={AboutPage} ></Route>
            <Route path="/article/add" component={AddArticle} />
            <Route path="/article/:name" component={ArticlePage}/>
            <Route path="/article" component={ArticlesListPage} />
            
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
