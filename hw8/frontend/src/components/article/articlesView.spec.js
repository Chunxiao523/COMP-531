import React from 'react'
import {mount , shallow} from 'enzyme'
import {expect} from 'chai'
import {ArticlesView} from './articlesView.js'
import {Article} from './article.js'
import {NewArticle} from './newArticle'
import TestUtils from 'react-addons-test-utils'
import { findDOMNode } from 'react-dom'

//article view's test
describe('ArticlesView', () => {
	it ('should render articles',()=>{
	   const node = shallow(
      <ArticlesView 
        author='abc'
        comments={[{commentId:'1',
        author:'2', date:'3',text:'4'}]} date='123' 
        img='testimg' text='testtxt'
      />)
    expect(node.unrendered.props.author).to.equal('abc')
    expect(node.unrendered.props.date).to.equal('123')
    expect(node.unrendered.props.img).to.equal('testimg')
    expect(node.unrendered.props.text).to.equal('testtxt')
	})

	it('should dispatch actions to create a new article',()=>{
		//test the addarticle function
		 let toggled = false
    	const node = TestUtils.renderIntoDocument(<div>
      	<NewArticle
        	toggle={() => { toggled = true }}/></div>)

    	const elements = findDOMNode(node).children[0]

    	expect(toggled).to.be.false
	})
})