import { combineReducers } from 'redux';
import home from './home';
import user from './user';
import userUI from './userUI';
import utils from './utils';
import message from './message';
import messageUI from './messageUI';

export default combineReducers({
	home,
	user,
	userUI,
	utils,
	message,
	messageUI
});
