import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from "./auth";

import { GET_BUGS, DELETE_BUG, ADD_BUG } from './types';

// GET BUGS
export const getBugs = () => (dispatch, getState) => {
    axios.get('/api/bugs/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_BUGS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Delete BUG
export const deleteBug = (id) => (dispatch, getState) => {
    axios.delete(`/api/bugs/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ bugDelete: "Bug Deleted!" }))
            dispatch({
                type: DELETE_BUG,
                payload: id
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add BUG
export const addBug = (bug) => (dispatch, getState) => {
    console.log(bug, tokenConfig(getState))
    axios.post("/api/bugs/", bug, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ bugAdd: "Bug Added!" }))
            dispatch({
                type: ADD_BUG,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}