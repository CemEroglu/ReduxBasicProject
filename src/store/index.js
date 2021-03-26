import {createStore, combineReducers} from 'redux'
import CounterReducer from './reducers/counter'

const reducers = combineReducers({
    counter_key:CounterReducer
})

const store = createStore(reducers);

export default store;