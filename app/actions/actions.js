import axios from 'axios';

const API_URI = "http://rest.learncode.academy/api/marvinites/users";

export function fetchUser() {
	return function(dispatch) {
		axios.get(API_URI)
			.then((response) => {
				dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_USER_REJECTED", payload: err})
			})
	}
}