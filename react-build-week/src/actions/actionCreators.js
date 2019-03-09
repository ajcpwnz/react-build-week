import * as types from './actionTypes';
import axios from 'axios';

export const getExperimentsAsync = () => dispatch => {
    axios
        .get('https://demo7071140.mockable.io/experiments')
        .then(res => {
        dispatch({ type: types.FETCH_EXPERIMENTS, payload: res.data });
    });
};