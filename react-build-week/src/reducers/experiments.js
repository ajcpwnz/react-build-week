import * as types from '../actions/actionTypes';

export function experiments(experimentsArray = [], action) {
    switch (action.type) {
      case types.FETCH_EXPERIMENTS:
        return action.payload;
      case types.FETCH_EXPERIMENT:
        return action.payload;
      case types.ADD_EXPERIMENT:
        return experimentsArray.concat(action.payload);
      case types.DELETE_EXPERIMENT:
        return experimentsArray.filter(experiment => experiment.id !== action.payload);
      default:
        return experimentsArray;
    }
  }