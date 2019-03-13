import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { experiments } from './experiments';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    experiments,
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);