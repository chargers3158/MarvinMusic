export default function userReducer(state= {
	user: {
		id: null,
		name: null,
		controls: {
			balance: null,
			rockets: null,
			bombs: null
		},
		statusVote: null
	},
	fetching: false,
	fetched: false,
	error: null
}, action) {

	switch( action.type ) {
		case "FETCH_USER_PENDING" : {
			return {
				...state,
				fetching: true
			}
		}
		case "FETCH_USER_FULFILLED" : {
			var user = action.payload.data[0];
			return {
				...state,
				fetched: true,
				user: {
					...state.user,
					id: user._id,
					name: user.first_name + " " + user.last_name,
					controls: {
						...state.user.controls,
						balance: user.marvin_controls.balance,
						rockets: user.marvin_controls.rockets,
						bombs: user.marvin_controls.bombs
					}
				}
			}
		}
		case "FETCH_USER_REJECTED" : {
			return {
				...state,
				error: action.payload
			}
		}
		case "BUY_SONG_FULFILLED" : {
			return { ...state,
				user: { ...state.user,
					controls: { ...state.user.controls,
						balance: action.payload.data.marvin_controls.balance
					}
				}
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