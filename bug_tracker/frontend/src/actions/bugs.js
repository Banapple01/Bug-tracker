import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_BUGS, DELETE_BUG, ADD_BUG, GET_ERRORS } from './types';

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
            dispatch(createMessage({ bugDelete: "Bug Deleted!" }))
            dispatch({
                type: DELETE_BUG,
                payload: id
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        });
}

// Add BUG
export const addBug = (bug) => dispatch => {
    axios.post("/api/bugs/", bug)
        .then(res => {
            dispatch(createMessage({ bugAdd: "Bug Added!" }))
            dispatch({
                type: ADD_BUG,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        });
}