import {createStore, combineReducers} from 'redux';
import user from './shop';

const reducer =combineReducers({
    user,
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store