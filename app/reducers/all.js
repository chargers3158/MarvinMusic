import { combineReducers } from 'redux';

import user from 'reducers/user';
import song from 'reducers/song';

export default combineReducers( {
	user,
	song
})