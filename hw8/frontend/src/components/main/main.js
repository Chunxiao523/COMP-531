import React from 'react';
import NavBar from '../main/navBar.js'
import Article from '../article/article.js'
import Following from './following.js'
//main page
export default class Main extends React.Component {
	 render() {
        return (
            <div className="container">
            	<NavBar/>
            	<div className="col-md-8">
              		<Article />
              	</div>
              	<div className="col-md-4 ">
              		<Following/>
              	</div>
            </div>
        );
    }
}