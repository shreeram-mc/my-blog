import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar></NavBar>
        </div>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/about" component={AboutPage} ></Route>
            <Route path="/article/:name" component={ArticlePage}/>
            <Route path="/article" component={ArticlesListPage} ></Route>            
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
