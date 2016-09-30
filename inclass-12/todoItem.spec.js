import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {findDOMNode} from 'react-dom'
import {expect} from 'chai'

import { ToDoItem } from './todoItem'

describe('Validate ToDoItem', () => {

	it('should display a single ToDo', () => {
		// use TestUtils.renderIntoDocument
		// findDOMNode and assert 3 children of the ToDoItem element
		// assert the className is ''
		// assert the innerHTML of the todo is the text you initially set
		let node = TestUtils.renderIntoDocument(<div><ToDoItem id={1} text="hello" done={false} toggle={() => {}} remove={() => {}}/></div>)
		const elements = findDOMNode(node).children[0]
		expect(elements.children.length).to.equal(3)

		expect(elements.children[1].className).to.equal('')

		const input = elements.children[0]
		input.value = 'foodbar'
		TestUtils.Simulate.change(input)
		expect(input.value).to.equal('foodbar')
	})

	it('should toggle completed when clicked', () => {
		 let toggled = false
		 let node = TestUtils.renderIntoDocument(<div><ToDoItem id={1} text="hello" done={false} toggle={() => {toggled=true}} remove={() => {}}/></div>)
		 const elements = findDOMNode(node).children[0]
		 TestUtils.Simulate.click(elements.children[0])
		 expect(toggled).to.be.true
		// use TestUtils.renderIntoDocument
		// when the checkbox is clicked via TestUtils.Simulate.click()
		// we expect the variable toggled to be true
	})

	it('should remove an item when clicked', () => {
		let removed = false
		let node = TestUtils.renderIntoDocument(<div><ToDoItem id={1} text="hello" done={false} toggle={() => {}} remove={() => {removed=true}}/></div>)
		const elements = findDOMNode(node).children[0]
		TestUtils.Simulate.click(elements.children[2])
		expect(removed).to.be.true

		// use TestUtils.renderIntoDocument
		// when the remove button is clicked via TestUtils.Simulate.click()
		// we expect the variable removed to be true
	})

	it('should display a completed ToDo', () => {
		const node = TestUtils.renderIntoDocument(<div><ToDoItem id={1} text="hello" done={true} toggle={() => {}} remove={() => {}}/></div>)
		const elements = findDOMNode(node).children[0]
		expect(elements.children[1].className).to.equal('completed')

		// use TestUtils.renderIntoDocument
		// the item should have done=true
		// assert that the rendered className is "completed"
	})

})
