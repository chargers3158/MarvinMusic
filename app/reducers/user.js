export default function userReducer(state= {
	user: {
		name: "Topher Young",
		balance: 10,
		rockets: 7,
		bombs: 5
	},
	fetched: false,
	error: null
}, action) {

	switch( action.type ) {
		case "FETCH_USER_FULFILLED" : {
			return {
				...state,
				fetched: true,
				user: action.payload
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