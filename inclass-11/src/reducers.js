
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
			return Object.assign ({}, state, 
			{todoItems: [...state.todoItems.slice(0, action.id), Object.assign({}, state.todoItems[action.id], {done: !state.todoItems[action.id].done}), ...state.todoItems.slice(action.id + 1)]}); 
		default: 
			return state
	}

}


export default Reducer