import {createStore, combineReducers} from 'redux'
import CounterReducer from './reducers/counter'
import ListReducer from './reducers/list';

const reducers = combineReducers({
    counter_key:CounterReducer,
    list_key:ListReducer
})

const store = createStore(reducers);

export default store;