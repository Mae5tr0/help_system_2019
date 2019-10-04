import { combineReducers } from 'redux';
import tickets from './ticketReducer';

const rootReducer = combineReducers({
  // short hand property names
  tickets
})

export default rootReducer;