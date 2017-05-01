const initialState = {
  me : {},
  loginStatus : 'LOGOUT',
  error: '',
  users: [],
  communities: []
}

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN_FETCHING":
      return {
        ...state,
        loginStatus : 'LOGIN_FETCHING'
      };
    case "LOGIN_INVALIDATE":
      return {
        ...state,
        loginStatus : 'LOGIN_INVALIDATE',
        error : action.payload
      };
    case "LOGIN":
      return { ...state, me : action.payload, loginStatus : 'LOGIN_OK' }
    case "FETCHED_USERS":
      return { ...state, users : action.payload, usersStatus : 'FETCHED_USERS' }

    case "FETCHED_COMMUNITY":
      return { communities : action.payload, usersStatus : 'FETCHED_COMMUNITY' }
      
    case "COMMUNITY_CREATED":
      return { ...state, communities : state.communities.push(action.payload),  }

    


    default:
      return state;
  }
}
