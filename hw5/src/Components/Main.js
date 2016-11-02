import React from 'react';
import NavBar from './Main/NavBar.js'
import Article from './Article/Article.js'
import Following from './Main/Following.js'
import EditField from './Main/EditField.js'
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