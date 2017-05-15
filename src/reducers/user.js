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

    case "USER_CREATED":
      return { ...state, users : state.users.concat(action.payload)  }

    case "USER_DELETED":
      let id = action.payload.replace(' removed!', '')
      let users = state.users.filter((user)=> user._id != id )
      return { ...state, ...{ users : users } }

    case "FETCHED_COMMUNITY":
      return { ...state, communities : action.payload, usersStatus : 'FETCHED_COMMUNITY' }
      
    case "COMMUNITY_CREATED":
      return { ...state, communities : state.communities.concat(action.payload),  }

    case "COMMUNITY_DELETED":
      let idcommunity = action.payload.replace(' removed!', '')
      let communities = state.communities.filter((community)=> community._id != idcommunity )
      return { ...state, ...{ communities : communities } }

    


    default:
      return state;
  }
}
