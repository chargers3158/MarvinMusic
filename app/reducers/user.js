export default function userReducer(state= {
	user: {},
	fetched: false,
	error: null
}, action) {

	switch( action.type ) {
		case "FETCH_USER_FULFILLED" : {
			return {
				...state,
				fetched: true,
				tools: action.payload
			}
		}
		case "FETCH_USER_REJECTED" : {
			return {
				...state,
				error: action.payload
			}
		}
		default : {
			return state;
		}
	}

}