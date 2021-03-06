import * as types from '../constants/ActionTypes';


const initialState = {
	secret: null,
	publicInfo: null,
	updatePending: false,
	otherUser: null
};


export default function (state = initialState, action) {
	const { payload, error, meta = {}, type } = action;
	const { sequence = {} } = meta;
	if (sequence.type === 'start' || error) {
		return state;
	}


	switch (type) {
		case types.CHECK_TOKEN:
			return {
				...state,
				...payload
			};
		case types.GET_USER_FROM_STORAGE:
			return {
				...state,
				...payload
			};
		case types.UPDATE_CLIENT_USER_INFO:
			return {
				...state,
				publicInfo: payload
			};
		case types.GET_USER_INFO:
			return {
				...state,
				otherUser: payload
			};
		default:
			return state;
	}
}
