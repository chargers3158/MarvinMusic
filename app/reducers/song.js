export default function songReducer(state= {
	song: {
		name: "citizen erased",
		artist: "muse",
		album: "origin of symmetry",
		albumArt: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Museoriginofsymemtryalbumcover.jpg/220px-Museoriginofsymemtryalbumcover.jpg",
		songRating: 4,
		addedBy: "topher young",
		timesPlayed: 1
	},
	fetched: false,
	error: null
}, action) {

	switch( action.type ) {
		case "FETCH_SONG_FULFILLED" : {
			return {
				...state,
				fetched: true,
				user: action.payload
			}
		}
		case "FETCH_SONG_REJECTED" : {
			return {
				...state,
				error: action.payload
			}
		}
		case "DECREASE_RATING" : {
			if (state.song.songRating != 8) {
				if (state.song.songRating > 0) {
					return {
						...state,
						song: {
							...state.song,
							songRating: state.song.songRating - action.value
						}
					}
				} 
				else { return {...state}}
			}
			else { return {...state}}
		}
		case "INCREASE_RATING" : {
			if (state.song.songRating != 0) {
				if (state.song.songRating < 8) {
					return {
						...state,
						song: {
							...state.song,
							songRating: state.song.songRating + action.value
						}
					}
				} 
				else { return {...state}}
			}
			else { return {...state}}
		}
		default : {
			return state;
		}
	}

}