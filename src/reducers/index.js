const initialState = {
	user : {},
    logged: false
}

function reducer(state = initialState, action = {}) {
	switch (action.type){
		case 'GET_LOGIN': 
			return state;
        case 'SET_LOGIN': 
			return { ...state, ...{ user : action.payload.props }, ...{logged : true} };
		default: 
			return state;
	}
	return state
}


export default reducer;