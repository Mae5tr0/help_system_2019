import { combineReducers } from 'redux-immutable';
import tickets from './ticketReducer';

const rootReducer = combineReducers({
  tickets,
})

export default rootReducer;