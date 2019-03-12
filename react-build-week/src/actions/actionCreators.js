import * as types from './actionTypes';
import axios from 'axios';

export const getExperimentsAsync = () => dispatch => {
    axios
        .get(`https://demo7071140.mockable.io/experiments`)
        .then(res => {
            dispatch({ type: types.FETCH_EXPERIMENTS, payload: res.data })
    });
};

export const searchExperiments = search => dispatch => {
    dispatch({ type: types.SEARCH_EXPERIMENTS, payload: search})
};

export const getExperiment = id => dispatch => {
    axios
        .get(`https://demo7071140.mockable.io/experiments/${id}`)
        .then(res => {
            dispatch({ type: types.FETCH_EXPERIMENT, payload: res.data })
    });
};

export const addExperiment = experiment => dispatch => {
    axios
        .post(`https://demo7071140.mockable.io/experiments`, experiment)
        .then(res => {
            dispatch({ type: types.ADD_EXPERIMENT, payload: res.data })
    });
};

export const deleteExperiment = id => dispatch => {
    axios
        .post(`https://demo7071140.mockable.io/experiments/${id}`)
        .then(res => {
            dispatch({ type: types.DELETE_EXPERIMENT, payload: res.data })
    });
};