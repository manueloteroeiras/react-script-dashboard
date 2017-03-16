function  getLogin(props) {
	return {
		type : 'GET_LOGIN',
		payload : { props }
	}
}

function  setLogin(props) {
	return {
		type : 'SET_LOGIN',
		payload : { props }
	}
}




export { getLogin, setLogin };