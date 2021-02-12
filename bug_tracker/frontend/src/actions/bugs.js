import axios from 'axios';

import { GET_BUGS, DELETE_BUG, ADD_BUG } from './types';

// GET BUGS
export const getBugs = () => dispatch => {
    axios.get('/api/bugs/')
        .then(res => {
            dispatch({
                type: GET_BUGS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

// Delete BUG
export const deleteBug = (id) => dispatch => {
    axios.delete(`/api/bugs/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_BUG,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

// Add BUG
export const addBug = (bug) => dispatch => {
    axios.post("/api/bugs/", bug)
        .then(res => {
            dispatch({
                type: ADD_BUG,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}