import * as types from '../actions/actionTypes';

const initialState = { allExperiments: [], experiment: {}, activeFilter: {}, searchFilter: null}

export function experiments(experimentsArray = initialState, action) {
    switch (action.type) {
      case types.FETCH_EXPERIMENTS:
        return {...experimentsArray, allExperiments: action.payload}
      case types.SEARCH_EXPERIMENTS:
        return {...experimentsArray, searchFilter: action.payload}
      case types.FILTER_TOOLS:
        return {...experimentsArray, activeFilter: action.payload}
      case types.FETCH_EXPERIMENT:
        return {...experimentsArray, experiment: action.payload}
      case types.ADD_EXPERIMENT:
        return {...experimentsArray, allExperiments: [...experimentsArray.allExperiments,  action.payload]}
      case types.EDIT_EXPERIMENT:
      return {...experimentsArray, allExperiments: [...experimentsArray.allExperiments.filter(experiment => experiment.id !== action.payload.id),  action.payload]}
      case types.DELETE_EXPERIMENT:
        return {...experimentsArray, allExperiments: experimentsArray.allExperiments.filter(experiment => experiment.id !== action.payload)}
      default:
        return experimentsArray;
    }
  }