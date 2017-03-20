const initialState = {
	user : {},
    logged: false,
	slides : [
		{
			title : 'Slide 1',
			label : 'facultad',
			hero : 'https://firebasestorage.googleapis.com/v0/b/project-5935677920263252986.appspot.com/o/images%2FY2rkyWMGGOa8VaMmCjbhs19srEn1%2FFisica%2FSlide22.jpg?alt=media&token=312eba72-99e8-4467-85ae-25d970091a25',
			collection : [
				{
					text : '',
					source : 'https://firebasestorage.googleapis.com/v0/b/project-5935677920263252986.appspot.com/o/images%2FY2rkyWMGGOa8VaMmCjbhs19srEn1%2FFisica%2FSlide22.jpg?alt=media&token=312eba72-99e8-4467-85ae-25d970091a25'
				}
			]
		}
	]
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