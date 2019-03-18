import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { experiments } from './experiments';
import { tools } from './tools';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    experiments,
    tools
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);