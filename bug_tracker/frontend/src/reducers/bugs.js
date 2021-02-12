import { GET_BUGS, DELETE_BUG, ADD_BUG } from '../actions/types.js';

const initialState = {
    bugs: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BUGS:
            return {
                ...state,
                bugs: action.payload
            };
            case DELETE_BUG:
                return {
                    ...state,
                    bugs: state.bugs.filter(bug => bug.id !== action.payload)
                }
            case ADD_BUG:
                return {
                    ...state,
                    bugs: [...state.bugs, action.payload]
                }
        default:
            return state;
    }
}