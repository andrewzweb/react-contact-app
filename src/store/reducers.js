import { combineReducers } from 'redux';
import * as reducers from './ContactAdd/reducers'


const contactApp = combineReducers(reducers)

export default contactApp 
