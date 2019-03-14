import * as types from './actionTypes';
import axios from 'axios';

const experiments_url = 'http://demo7071140.mockable.io/experiments'
const experiments_url_test = 'https://stark-springs-25470.herokuapp.com/experiments/';

// FETCH EXPERIMENTS

export const getExperimentsAsync = () => dispatch => {
    axios
        .get(experiments_url_test)
        .then(res => {
            dispatch({ type: types.FETCH_EXPERIMENTS, payload: res.data })
    });
};

// SEARCH EXPERIMENTS

export const searchExperiments = search => dispatch => {
    dispatch({ type: types.SEARCH_EXPERIMENTS, payload: search })
};

// FILTER TOOLS

export const filterTools = tools => dispatch => {
    dispatch({ type: types.FILTER_TOOLS, payload: tools })
}

// GET EXPERIMENT

export const getExperiment = id => dispatch => {
    axios
        .get( experiments_url_test + id )
        .then(res => {
            dispatch({ type: types.FETCH_EXPERIMENT, payload: res.data })
    });
};

// ADD EXPERIMENT

export const addExperiment = experiment => dispatch => {
    return axios
        .post(experiments_url_test, experiment)
        .then(res => {
            dispatch({ type: types.ADD_EXPERIMENT, payload: res.data })
    });
};

// EDIT EXPERIMENT

export const editExperiment = (id, experiment) => dispatch => {
    return axios
        .put(experiments_url_test + id, experiment)
        .then(res => {
            dispatch({ type: types.EDIT_EXPERIMENT, payload: res.data })
    });
};

// DELETE EXPERIMENT

export const deleteExperiment = id => dispatch => {
    axios
        .delete(experiments_url_test + id)
        .then(res => {
            dispatch({ type: types.DELETE_EXPERIMENT, payload: id })
    });
};