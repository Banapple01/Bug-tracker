import { combineReducers } from 'redux';
import bugs from './bugs';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    bugs,
    errors,
    messages,
    auth
});