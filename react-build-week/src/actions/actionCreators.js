import * as types from './actionTypes';
import axios from 'axios';

const experiments_url = 'http://demo7071140.mockable.io/experiments'
const experiments_url_test = 'https://stark-springs-25470.herokuapp.com/experiments/';

// FETCH EXPERIMENTS

export const getExperimentsAsync = () => dispatch => {
    axios
        .get(experiments_url)
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

// ADD EXPERIMENT - TODO

export const addExperiment = (experiment) => dispatch => {
    axios
        .post(experiments_url_test, experiment)
        .then(res => {
            dispatch({ type: types.ADD_EXPERIMENT, payload: res.data })
    });
};

// DELETE EXPERIMENT - TODO

export const deleteExperiment = id => dispatch => {
    axios
        .post(experiments_url_test + id)
        .then(res => {
            dispatch({ type: types.DELETE_EXPERIMENT, payload: res.data })
    });
};