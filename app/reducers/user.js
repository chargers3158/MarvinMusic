export default function userReducer(state= {
	user: {
		name: "Topher Young",
		balance: 10,
		rockets: 7,
		bombs: 5,
		statusVote: null
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
		case "USE_ROCKET" : {
			if (state.user.rockets > 0) {
				return {
					...state,
					user: {
						...state.user,
						rockets: state.user.rockets - 1
					}
				}
			}
			else { return {...state}} 
		}
		case "USE_BOMB" : {
			if (state.user.bombs > 0) {
				return {
					...state,
					user: {
						...state.user,
						bombs: state.user.bombs - 1
					}
				}
			}
			else { return {...state}} 
		}
		case "BUY_SONG" : {
			if (state.user.balance > 0) {
				return {
					...state,
					user: {
						...state.user,
						balance: state.user.balance - action.price
					}
				}
			}
			else { return {...state}} 
		}
		case "STATUS_VOTE" : {
			return {
				...state,
				user: {
					...state.user,
					statusVote: action.vote
				}
			}
		}
		case "RESET_USER_STATE" : {
			return {
				...state,
				user: {
					...state.user,
					balance: 10,
					rockets: 7,
					bombs: 5,
					statusVote: null
				}
			}
		}
		case "RESET_BALANCE" : {
			return {
				...state,
				user: {
					...state.user,
					balance: 10,
				}
			}
		}
		case "RESET_VOTE_STATUS" : {
			return {
				...state,
				user: {
					...state.user,
					statusVote: null,
				}
			}
		}
		default : {
			return state;
		}
	}

}