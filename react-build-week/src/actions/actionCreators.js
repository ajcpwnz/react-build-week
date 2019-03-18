import * as types from './actionTypes';
import axios from 'axios';

const experiments_url = 'http://demo7071140.mockable.io/experiments'
const experiments_url_test = 'https://stark-springs-25470.herokuapp.com/experiments/';

const tools_url_test = 'http://localhost:5000/tools';

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

export const filterExperiments = experiments => dispatch => {
    dispatch({ type: types.FILTER_EXPERIMENTS, payload: experiments })
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
            dispatch({ type: types.EDIT_EXPERIMENT, payload: {...res.data, id }})
    });
};

// DELETE EXPERIMENT

export const deleteExperiment = id => dispatch => {
    dispatch({ type: types.DELETE_EXPERIMENT, payload: Number(id) })
    return axios.delete(experiments_url_test + id)
};

// FETCH TOOLS

export const getToolsAsync = () => dispatch => {
  axios
      .get(tools_url_test)
      .then(res => {
          dispatch({ type: types.FETCH_TOOLS, payload: res.data })
  });
};

// SEARCH TOOLS

export const searchTools = search => dispatch => {
  dispatch({ type: types.SEARCH_TOOLS, payload: search })
};

// FILTER TOOLS

export const filterTools = tools => dispatch => {
  dispatch({ type: types.FILTER_TOOLS, payload: tools })
}

// GET TOOL

export const getTool = id => dispatch => {
  axios
      .get( tools_url_test + id )
      .then(res => {
          dispatch({ type: types.FETCH_TOOL, payload: res.data })
  });
};

// ADD TOOL

export const addTool = tool => dispatch => {
  return axios
      .post(tools_url_test, tool)
      .then(res => {
          dispatch({ type: types.ADD_TOOL, payload: res.data })
  });
};

// EDIT TOOL

export const editTool = (id, tool) => dispatch => {
  return axios
      .put(tools_url_test + id, tool)
      .then(res => {
          dispatch({ type: types.EDIT_TOOL, payload: {...res.data, id }})
  });
};

// DELETE TOOL

export const deleteTool = id => dispatch => {
  dispatch({ type: types.DELETE_TOOL, payload: Number(id) })
  return axios.delete(tools_url_test + id)
};