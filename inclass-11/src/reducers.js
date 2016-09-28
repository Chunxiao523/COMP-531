
const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			 var copy = Object.assign({}, state, {nextId: state.nextId ++},{todoItems: [...state.todoItems, {id: state.nextId, text: action.text, done: false}]} );
			return copy
		case 'REMOVE_TODO':
			return Object.assign({}, state, {todoItems: state.todoItems.filter(todo => 
				todo.id !== action.id
				)})
		case 'TOGGLE_TODO':
		// var toggle = Object.assign({}, state, {todoItems: } );
		// 	return toggle
			// state.todoItems[action.id].done = true;
			// return state
			
			 // return Object.assign({}, state, {todoItems: !state.todoItems.done})
		default: 
			return state
	}
}
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}


export default Reducer