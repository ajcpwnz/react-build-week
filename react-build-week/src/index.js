import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { experiments } from './reducers/experiments';

const rootReducer = combineReducers({
    experiments,
});

const store = createStore(
    rootReducer,
    {
        experiments: [
            { id: null,
              title: null,
              description: null
            }
        ],
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
