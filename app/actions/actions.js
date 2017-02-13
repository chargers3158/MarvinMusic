import axios from 'axios';

const API_URI = "https://marvin-api.herokuapp.com";

export function fetchUser() {
	return {
		type: "FETCH_USER",
		payload: axios.get(API_URI+'/users')
	}
}

// export const useMarvinControls = (userid, type, value) => {
// 	return(dispatch, getState) => {
// 		dispatch({type: "FETCH_USER", payload: value})
// 	}
// }

export function useMarvinControls(user, type, value, previous) {
	let API = API_URI+'/users/'+user+'/'+type+'/'; 
	switch(type) {
		case 'balance' : {
			let newValue = previous.balance - value;
			if(newValue >= 0) {
				return {
					type: "BUY_SONG",
					payload: axios.post(API+newValue)
				}
			}
		}
	}
}

// export function fetchUser() {
// 	return function(dispatch) {
// 		axios.get(API_URI)
// 			.then((response) => {
// 				dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
// 			})
// 			.catch((err) => {
// 				dispatch({type: "FETCH_USER_REJECTED", payload: err})
// 			})
// 	}
// }

// export function useMarvinControls(user, type, value) {
// 	let API = API_URI+'/'+user+'/'+type+'/'+value;
// 	return function(dispatch) {
// 				dispatch({type: "BUY_SONG", payload: value});
// 				axios.post(API)
// 				.then(() => { })
// 				.catch((err) => {
// 					dispatch({type: "BUY_SONG_FAILED", payload: err})
// 				})
// 	}
// }