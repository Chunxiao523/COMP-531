import React from 'react';
import NavBar from '../main/navBar.js'
import Article from '../article/article.js'
import Following from './following.js'
//main page
export default class Main extends React.Component {
	 render() {
        return (
            <div className="main">
              <NavBar/>
              <Article />
              <Following/>
            </div>
        );
    }
}